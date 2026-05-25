'use client'

import { useEffect, useRef } from 'react'

export function useReveal() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return containerRef
}
