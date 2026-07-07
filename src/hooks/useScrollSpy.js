import { useEffect, useMemo, useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'

export function useScrollSpy(sectionIds){
  const [active, setActive] = useState(sectionIds?.[0] ?? '')

  const map = useMemo(() => new Map(sectionIds.map(id => [id,id])), [sectionIds])

  useEffect(() => {
    const ids = sectionIds.filter(Boolean)
    const els = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if(!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if(visible[0]?.target?.id && map.has(visible[0].target.id)){
          setActive(visible[0].target.id)
        }
      },
      { threshold: [0.2, 0.35, 0.5, 0.65] }
    )

    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [sectionIds, map])

  function go(id){
    setActive(id)
    scrollToSection(`#${id}`)
  }

  return { activeId: active, go }
}

