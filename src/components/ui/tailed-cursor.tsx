"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

interface TailedCursorProps {
  colors?: string[];
  baseSpring?: number;
  baseFriction?: number;
  baseThickness?: number;
  offsetFactor?: number;
  maxAge?: number;
  pointCount?: number;
  speedMultiplier?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
  effectAmplitude?: number;
  backgroundColor?: [number, number, number, number];
}

function TailedCursorComponent({
  colors,
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.0,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.5,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}: TailedCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !mounted) return;

    // Dynamic import of OGL
    import('ogl').then(({ Color, Polyline, Renderer, Transform, Vec3 }) => {
      let renderer: InstanceType<typeof Renderer> | undefined;
      let oglContext: InstanceType<typeof Renderer>['gl'] | undefined;
      let canvasElement: HTMLCanvasElement | undefined;
      
      try {
        // Create a renderer with an alpha-enabled context
        renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
        oglContext = renderer.gl;
        
        if (!oglContext || !renderer) {
          setHasWebGL(false);
          return;
        }
      } catch (error) {
        // WebGL not available - fail silently
        setHasWebGL(false);
        return;
      }

      try {
        // Determine cursor color based on theme
        const currentTheme = theme === "system" ? resolvedTheme : theme;
        const cursorColor = colors || (currentTheme === "light" ? ["#dc2626"] : ["#ffffff"]);

        oglContext.clearColor(0, 0, 0, 0);

        canvasElement = oglContext.canvas as HTMLCanvasElement;
        canvasElement.style.position = "absolute";
        canvasElement.style.top = "0";
        canvasElement.style.left = "0";
        canvasElement.style.width = "100%";
        canvasElement.style.height = "100%";
        canvasElement.style.pointerEvents = "none";
        container.appendChild(canvasElement);

        const scene = new Transform();
        const lines: Array<{
          spring: number;
          friction: number;
          mouseVelocity: typeof Vec3.prototype;
          mouseOffset: typeof Vec3.prototype;
          points: typeof Vec3.prototype[];
          polyline: typeof Polyline.prototype;
        }> = [];

        const vertex = `
          precision highp float;
          
          attribute vec3 position;
          attribute vec3 next;
          attribute vec3 prev;
          attribute vec2 uv;
          attribute float side;
          
          uniform vec2 uResolution;
          uniform float uDPR;
          uniform float uThickness;
          uniform float uTime;
          uniform float uEnableShaderEffect;
          uniform float uEffectAmplitude;
          
          varying vec2 vUV;
          
          vec4 getPosition() {
              vec4 current = vec4(position, 1.0);
              vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
              vec2 nextScreen = next.xy * aspect;
              vec2 prevScreen = prev.xy * aspect;
              vec2 tangent = normalize(nextScreen - prevScreen);
              vec2 normal = vec2(-tangent.y, tangent.x);
              normal /= aspect;
              normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
              float dist = length(nextScreen - prevScreen);
              normal *= smoothstep(0.0, 0.02, dist);
              float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
              float pixelWidth = current.w * pixelWidthRatio;
              normal *= pixelWidth * uThickness;
              current.xy -= normal * side;
              if(uEnableShaderEffect > 0.5) {
                current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
              }
              return current;
          }
          
          void main() {
              vUV = uv;
              gl_Position = getPosition();
          }
        `;

        const fragment = `
          precision highp float;
          uniform vec3 uColor;
          uniform float uOpacity;
          uniform float uEnableFade;
          varying vec2 vUV;
          void main() {
              float fadeFactor = 1.0;
              if(uEnableFade > 0.5) {
                  fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
              }
              gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
          }
        `;

        function resize() {
          if (!container || !renderer) return;
          const width = container.clientWidth;
          const height = container.clientHeight;
          renderer.setSize(width, height);
          lines.forEach((line) => line.polyline.resize());
        }
        window.addEventListener("resize", resize);

        cursorColor.forEach((color) => {
          const spring = baseSpring;
          const friction = baseFriction;
          const thickness = baseThickness;
          const mouseOffset = new Vec3(0, 0, 0);

          const line = {
            spring,
            friction,
            mouseVelocity: new Vec3(),
            mouseOffset,
            points: [] as typeof Vec3.prototype[],
            polyline: {} as typeof Polyline.prototype,
          };

          const count = pointCount;
          const points: typeof Vec3.prototype[] = [];
          for (let i = 0; i < count; i++) {
            points.push(new Vec3());
          }
          line.points = points;

          line.polyline = new Polyline(oglContext, {
            points,
            vertex,
            fragment,
            uniforms: {
              uColor: { value: new Color(color) },
              uThickness: { value: thickness },
              uOpacity: { value: 1.0 },
              uTime: { value: 0.0 },
              uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
              uEffectAmplitude: { value: effectAmplitude },
              uEnableFade: { value: enableFade ? 1.0 : 0.0 },
            },
          });
          line.polyline.mesh.setParent(scene);
          lines.push(line);
        });

        resize();

        const mouse = new Vec3();
        function updateMouse(e: MouseEvent | TouchEvent) {
          let x: number, y: number;
          if ("changedTouches" in e && e.changedTouches.length) {
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;
          } else if (e instanceof MouseEvent) {
            x = e.clientX;
            y = e.clientY;
          } else {
            x = 0;
            y = 0;
          }
          mouse.set((x / window.innerWidth) * 2 - 1, (y / window.innerHeight) * -2 + 1, 0);
        }

        document.addEventListener("mousemove", updateMouse);
        document.addEventListener("touchstart", updateMouse);
        document.addEventListener("touchmove", updateMouse);

        const tmp = new Vec3();
        let frameId: number;
        let lastTime = performance.now();
        function update() {
          if (!renderer) return;
          frameId = requestAnimationFrame(update);
          const currentTime = performance.now();
          const dt = currentTime - lastTime;
          lastTime = currentTime;

          lines.forEach((line) => {
            tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[0].add(line.mouseVelocity);

            for (let i = 1; i < line.points.length; i++) {
              if (isFinite(maxAge) && maxAge > 0) {
                const segmentDelay = maxAge / (line.points.length - 1);
                const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
                line.points[i].lerp(line.points[i - 1], alpha);
              } else {
                line.points[i].lerp(line.points[i - 1], 0.9);
              }
            }
            if (line.polyline.mesh.program.uniforms.uTime) {
              line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
            }
            line.polyline.updateGeometry();
          });

          renderer.render({ scene });
        }
        update();

        // Cleanup function
        return () => {
          window.removeEventListener("resize", resize);
          document.removeEventListener("mousemove", updateMouse);
          document.removeEventListener("touchstart", updateMouse);
          document.removeEventListener("touchmove", updateMouse);
          cancelAnimationFrame(frameId);
          if (canvasElement && container && canvasElement.parentNode === container) {
            container.removeChild(canvasElement);
          }
        };
      } catch (error) {
        // Error during setup - clean up and fail silently
        setHasWebGL(false);
      }
    }).catch(() => {
      // Failed to load OGL library - fail silently
      setHasWebGL(false);
    });
  }, [
    colors,
    theme,
    resolvedTheme,
    mounted,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor,
  ]);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

// Export with dynamic import to prevent SSR issues
export const TailedCursor = dynamic(() => Promise.resolve(TailedCursorComponent), {
  ssr: false,
});
