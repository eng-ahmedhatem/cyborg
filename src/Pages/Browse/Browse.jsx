import React from 'react'
import "./Browse.css"
import {Featured_Games , TopDownloaded , StartStream , MostPopular_Live} from "../../Components/components_links"
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
export default function Browse() {
  useEffect (_=>{
      AOS.init();
    },[])
  return (
    <section>
            <section className="panner">
                <Featured_Games title_light="Featured" title_color="gams"/>
                <TopDownloaded title_light="Top" title_color="Downloaded"/>
            </section>
                <StartStream/>
                <MostPopular_Live/>
    </section>
  )
}
