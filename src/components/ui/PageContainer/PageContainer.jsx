import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { trackScroll } from '../../../services/analytics'

const DEPTHS = [25, 50, 75]

export default function PageContainer({ children }) {
  const ref = useRef(null)
  const fired = useRef(new Set())

  useEffect(() => {
    fired.current = new Set()
    const el = ref.current
    if (!el) return

    const observers = DEPTHS.map((depth) => {
      const sentinel = document.createElement('div')
      sentinel.style.cssText = `position:absolute;top:${depth}%;left:0;width:1px;height:1px;pointer-events:none;`
      el.style.position = 'relative'
      el.appendChild(sentinel)

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !fired.current.has(depth)) {
            fired.current.add(depth)
            trackScroll(depth)
          }
        },
        { threshold: 0 }
      )
      obs.observe(sentinel)
      return { obs, sentinel }
    })

    return () => {
      observers.forEach(({ obs, sentinel }) => {
        obs.disconnect()
        sentinel.remove()
      })
    }
  }, [])

  return (
    <Box component="main" ref={ref} sx={{ minHeight: '100vh' }}>
      {children}
    </Box>
  )
}
