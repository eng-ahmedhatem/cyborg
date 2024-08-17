import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { FaDownload} from "react-icons/fa";
export default function Row(Props) {
  return (
    <div className='row'>
<div className='img_text'>
<img src={Props.img} alt="" />
<div>
        <h4>{Props.name}</h4>
        <span>{Props.type}</span>
</div>
    </div>

<div className="text">
    <div>

    </div>
    <div>
    <span>
            <i>
            <BsFillStarFill />
            </i>
            {Props.rating}
        </span>      
        <span>
        <i>
        <FaDownload />
        </i>
        {Props.download}M
    </span>
    </div>
    </div>
    </div>
  )
}

/*

import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { FaDownload} from "react-icons/fa";
import { BtnColor } from "../../../Components/components_links"
export default function Row(Props) {
  return (
    <div className='row'>
        <div>


</div>
</div>
        <BtnColor btnTitle = {<FaDownload />}   height="50px" width="50px"/>
    </div>
  )
}


*/