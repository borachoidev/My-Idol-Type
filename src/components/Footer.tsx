import React, { useEffect, useRef } from 'react'
import 'twin.macro'
function Footer() {
  const adfit = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let ins: HTMLModElement = document.createElement('ins')
    let scr: HTMLScriptElement = document.createElement('script')
    ins.setAttribute('style', 'display:none; width:100%;')
    ins.className = 'kakao_ad_area'
    scr.async = true
    scr.type = 'text/javascript'
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js'
    ins.setAttribute('data-ad-width', '320')
    ins.setAttribute('data-ad-height', '100')
    ins.setAttribute('data-ad-unit', 'DAN-dhOxOzGqmHehYB7w')

    const { current } = adfit

    current!.appendChild(ins)
    current!.appendChild(scr)
  }, [])

  return (
    <footer>
      <div ref={adfit}></div>
    </footer>
  )
}

export default Footer
