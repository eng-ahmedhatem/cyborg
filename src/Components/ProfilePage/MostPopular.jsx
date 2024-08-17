import React from 'react'
import {SectionTitle ,BtnColor} from "../components_links"
import Card_mostpop from './Card_mostpop'

export default function MostPopular() {
  return (
    <div className="MostPopular_clips" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="1000">
    <SectionTitle title_light="Your Most Popular" title_color="Clips"/>
    <div className="cards">
      <Card_mostpop img="./Browse/Featured_Games/featured-01.jpg" title="First Clip" view="236"/>
      <Card_mostpop img="./Browse/Featured_Games/featured-02.jpg" title="First Clip" view="236"/>
      <Card_mostpop img="./Browse/Featured_Games/featured-03.jpg" title="First Clip" view="236"/>
      <Card_mostpop img="./Browse/Featured_Games/featured-01.jpg" title="First Clip" view="236"/>
    </div>
    <BtnColor btnTitle="Load More Clips" width="200px" height="40px" btnType="btn_color"/>
    </div>
  )
}
