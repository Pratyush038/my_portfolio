// lib/sound.ts
export class SoundManager {
  private audioContext: AudioContext | null = null;
  private sounds: Map<string, AudioBuffer> = new Map();
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as typeof window & {webkitAudioContext: typeof AudioContext}).webkitAudioContext)();
    }
  }

  async loadSound(name: string, src: string) {
    if (!this.audioContext) return;

    try {
      console.log(`Loading sound: ${name} from ${src}`);
      const response = await fetch(src);
      if (!response.ok) {
        console.error(`Failed to fetch ${src}: ${response.status}`);
        return;
      }
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.sounds.set(name, audioBuffer);
      console.log(`Successfully loaded sound: ${name}`);
    } catch (error) {
      console.error(`Failed to load sound ${name}:`, error);
    }
  }

  playSound(name: string, volume: number = 0.5) {
    if (!this.audioContext || this.isMuted || !this.sounds.has(name)) {
      console.warn(`Cannot play sound ${name}: muted=${this.isMuted}, loaded=${this.sounds.has(name)}`);
      return;
    }

    const buffer = this.sounds.get(name)!;
    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();

    gainNode.gain.value = Math.max(0, Math.min(1, volume));
    console.log(`Playing sound: ${name} at volume ${volume}`);

    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    source.start();
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  getIsMuted() {
    return this.isMuted;
  }
}

// Singleton instance
export const soundManager = new SoundManager();
