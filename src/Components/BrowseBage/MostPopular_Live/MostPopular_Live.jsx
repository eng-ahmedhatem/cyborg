import React from 'react'
import Card from "./Card"
import {SectionTitle ,BtnColor} from "../../components_links"
export default function MostPopular_Live(Props) {
  const getCards = _=>{
    return (
      <>
      <div className="cards">
      <Card action="cs-go" view="1.2k" img_card="./Browse/MostPopular_Live/stream-01.jpg" img_user="./Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name="KenganC" title="Just Talking With Fans"/>
        <Card action="cs-go" view="1.2k" img_card="./Browse/MostPopular_Live/stream-02.jpg" img_user="./Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name="LunaMa" title="CS-GO 36 Hours Live Stream"/>
        <Card action="cs-go" view="1.2k" img_card="./Browse/MostPopular_Live/stream-03.jpg" img_user="./Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name="Areluwa" title="Maybe Nathej Allnight Chillin'"/>
        <Card action="cs-go" view="1.2k" img_card="./Browse/MostPopular_Live/stream-04.jpg" img_user="./Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name="GangTm" title="Live Streaming Till Morning"/>
      </div>
      </>
    )
  }
  const btn = _=>{
    return (
      <>
        <BtnColor btnTitle="discover all streams" width="210px" height="45px" btnType ="btn_color"/>
      </>
    )
  }
  return (
    <section className='MostPopular_Live' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="200">
        <SectionTitle title_light="Most Popular" title_color="Live Stream"/>
        
        {Props.children?Props.children:getCards()}
        
        {!Props.children && btn()}
    </section>
  )
}
