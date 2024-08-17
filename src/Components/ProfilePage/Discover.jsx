import React from 'react'
import UserDiscover from './UserDiscover'
import MostPopular from './MostPopular'
import {Your_Gaming} from "../components_links"
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
export default function Discover() {
    useEffect (_=>{
        AOS.init({once: false});
      },[])
  return (
    <>
    <section className='Discover'>
       <UserDiscover  userImg="./ProfilePage/profile.jpg" status="offline" userName = "Alan Smithee" text = "You Haven't Gone Live yet. Go Live By Touching The Button Below." download = "3" friendOnline = "16" liveStreams = "none" clips = "29"/>
       <hr/>
    <MostPopular/>
    </section>
    <Your_Gaming btn="no"/>
    </>
  )
}
