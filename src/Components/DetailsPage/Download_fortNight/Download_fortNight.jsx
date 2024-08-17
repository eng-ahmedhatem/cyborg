import { BsFillStarFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import {BtnColor} from "../../components_links"


import React from 'react'

export default function Download_fortNight(Props) {
  return (
    <section className='Download_fortNight'>
        <div className="row-1">
<div className="text" data-aos="flip-up"  data-aos-duration="500" data-aos-delay="500">
            <div className="title">
                <h4>fortnite</h4>
            <p>sandbox</p>
                
            </div>
            <div className="icons">
            <span>
                    <i>
                    <BsFillStarFill />
                    </i>
                    4.8
                </span>
            <span>
                <i>
                <FaDownload />
                </i>
                2.3M
            </span>
            </div>
        </div>
        <div className="data_icons" data-aos="flip-up"  data-aos-duration="500" data-aos-delay="500">
            <span>
            <i>
                    <BsFillStarFill />
                    </i>
                    4.8
            </span>
            <span>
            <i>
                <FaDownload />
                </i>
                2.3M
            </span>
            <span>
                <i>
                    <FaDatabase/>
                </i>
                36GB
            </span>
            <span>
                <i>
                    <FaGamepad/>
                </i>
                action
            </span>
        </div>
        </div>
        <div className="row-2">
            <div className="imgs" data-aos="zoom-in"  data-aos-duration="500" data-aos-delay="500">
                <img src="./Details/details-01.jpg" alt="" />
                <img src="./Details/details-02.jpg" alt="" />
                <img src="./Details/details-03.jpg" alt="" />
            </div>
            <p data-aos="zoom-in-up"  data-aos-duration="500" data-aos-delay="0">Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
        </div>
        <BtnColor btnTitle="download fortnite now!" width="100%" height="45px"/>
    </section>
  )
}
