import React from 'react'
import { BtnColor } from '../components_links'
export default function UserDiscover(Props) {
  return (
    <div className="user_discover" >
    <img src={Props.userImg} alt="" data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="0"/>
    <div className="text" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="0">
        <span>{Props.status}</span>
        <h2>{Props.userName}</h2>
        <p>{Props.text}</p>
        <BtnColor btnTitle="start live stream" width="200px" height="45px" />

    </div>
    <ul data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="0">
        <li>
            <h6>Games Downloaded</h6>
            <span>{Props.download}</span>
        </li>
        <li>
            <h6>Friends Online</h6>
            <span>{Props.friendOnline}</span>
        </li>
        <li>
            <h6>Live Streams</h6>
            <span>{Props.liveStreams}</span>
        </li>
        <li>
            <h6>Clips</h6>
            <span>{Props.clips}</span>
        </li>
    </ul>
</div>
  )
}
