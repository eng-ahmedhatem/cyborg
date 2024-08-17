import React from 'react'
import "./home.css"
import {MainBanner, MostPopular,Your_Gaming} from "../../Components/components_links"
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
export default function Home() {
  useEffect (_=>{
      AOS.init({once: false});
    },[])
  return (
    <>
    <MainBanner smallTitle="Welcome To Cyborg" textTitle_color="Browse" textTitle="Our Popular Games Here"/>
    <MostPopular/>
    <Your_Gaming/>

    </>
  )
}
