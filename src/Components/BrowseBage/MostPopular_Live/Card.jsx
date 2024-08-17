import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

export default function Card(Props) {
  return (
    <div className='Card'>
      <div className='img_container'>
        <span>live</span>
        <span><FaGamepad/> {Props.action}</span>
        <span><FaEye/> {Props.view}</span>
        <img src={Props.img_card} alt="" />
      </div>
        <div className="row-2">
            <img src={Props.img_user} alt="" />
            <div className="text">
                <span><i><FaCheckCircle/></i> {Props.user_name}</span>
                <h4>{Props.title}</h4>
            </div>
        </div>
    </div>
  )
}
