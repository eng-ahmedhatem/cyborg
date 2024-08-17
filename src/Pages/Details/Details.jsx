import React from 'react'
import {FortniteDetails ,Other_Related, Download_fortNight } from "../../Components/components_links"
import "./details.css"
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
export default function Details() {
    useEffect (_=>{
        AOS.init({once: false});
      },[])
  return (
    <>
    <FortniteDetails/>
    <Download_fortNight/>
    <Other_Related/>
    </>
  )
}
/** 
 * 
 * 
 * 
 * 

  useEffect (_=>{
      AOS.init({once: false});
    },[])
 * 
 * 
 */