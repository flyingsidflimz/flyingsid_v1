// reveal sections on scroll
import { useEffect } from "react";
export default function useScrollReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll(".section, .hscroll, .video-overlay");
    const onScroll = ()=>{
      els.forEach(el=>{
        const r = el.getBoundingClientRect();
        if(r.top < window.innerHeight - 120) el.classList.add("fade-up");
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return ()=>window.removeEventListener("scroll", onScroll);
  },[]);
}
