import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import {BtnColor} from "../../Components/components_links"
export default function RowData_topStream(Props) {
  return (
    <li className='RowData_topStream'>
        <img src={Props.img} alt="" />
        <span><i><FaCheckCircle/></i>{Props.user}</span>
        <BtnColor btnTitle="follow" width="100px" height="40px" btnType="btn_color"/>
    </li>
  )
}
