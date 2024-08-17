import React from "react";
import { SectionTitle , BtnColor } from "../../components_links";

import Row from "./Row";
export default function TopDownloaded(Props) {
function rowData(){
  return(
    <>
    <Row img="./home/Your Gaming/game-01.jpg" download="2.2m" rating="4.9"  type="Fortnite" name="Dota 2"/>
    <Row img="./home/Your Gaming/game-01.jpg" download="2.2m" rating="4.9"  type="Fortnite" name="Dota 2"/>
    <Row img="./home/Your Gaming/game-01.jpg" download="2.2m" rating="4.9"  type="Fortnite" name="Dota 2"/>
    </>
  )
}
function btn(){
  return(
    <BtnColor btnTitle = "View all games"  btnType={"btn_transparent"} height="45px" width="150px"/>
  )
}
  return (
    <div className="TopDownloaded" data-aos="fade-left"  data-aos-duration="500" data-aos-delay="500">
      <SectionTitle title_light={Props.title_light} title_color={Props.title_color} />
      <div className="rows">
        {Props.children ? Props.children : rowData()}
    
      </div>
        {!Props.children && btn()}
    </div>
  );
}
