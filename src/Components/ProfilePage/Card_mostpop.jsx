import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
export default function Card_mostpop(Props) {
  return (
    <div className="card">
    <div className="img_container">
        <img src={Props.img} alt="" />
        <span>
            <i><FaCirclePlay/></i>
        </span>
    </div>
    <div className="text">
        <h5>{Props.title}</h5>
        <span>
            <i><FaEye/></i>
            {Props.view}
        </span>
    </div>
</div>
  )
}

