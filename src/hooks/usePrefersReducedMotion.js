import { useEffect, useState } from 'react'

export function usePrefersReducedMotion(){
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setPrefersReducedMotion(Boolean(media.matches))
    onChange()

    if (media.addEventListener) media.addEventListener('change', onChange)
    else media.addListener(onChange)

    return () => {
      if (media.removeEventListener) media.removeEventListener('change', onChange)
      else media.removeListener(onChange)
    }
  }, [])

  return prefersReducedMotion
}

