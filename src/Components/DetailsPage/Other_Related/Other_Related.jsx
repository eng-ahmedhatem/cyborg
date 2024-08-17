import React from 'react'
import {SectionTitle} from "../../components_links"
import Row from './Row'
export default function Other_Related () {
  return (
    <section className="Other_Related" data-aos="fade-up"  data-aos-duration="500" data-aos-delay="200">
        <SectionTitle title_light="Other Related" title_color="Games"/>
        <div className="rows">
            <div className="col-1">
        <Row img="./home/Your Gaming/game-01.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
        <Row img="./home/Your Gaming/game-02.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
        <Row img="./home/Your Gaming/game-03.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
            </div>
            <div className="col-2">
        <Row img="./home/Your Gaming/game-01.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
        <Row img="./home/Your Gaming/game-02.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
        <Row img="./home/Your Gaming/game-03.jpg" type="Sandbox" rating="4.8" download="2.5" name="Dota 2"/>
            </div>
        </div>
    </section>
  )
}
