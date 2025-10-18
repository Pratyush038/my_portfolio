"use client"

import { TypeAnimation } from 'react-type-animation'

interface TypewriterProps {
  sequence: (string | number)[]
  wrapper?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  cursor?: boolean
  repeat?: number
  className?: string
}

export function Typewriter({
  sequence,
  wrapper = 'span',
  cursor = true,
  repeat = Infinity,
  className = ''
}: TypewriterProps) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      cursor={cursor}
      repeat={repeat}
      className={className}
    />
  )
}
