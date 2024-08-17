import React from 'react'
import { Featured_Games ,TopDownloaded , MostPopular_Live , BtnColor } from '../../Components/components_links'
import Card from '../../Components/BrowseBage/MostPopular_Live/Card'
import RowData_topStream from "./RowData_topStream"
import "./Streams.css"
export default function Streams() {
  return (
    <section className='Streams'>
        <section className="panner">
                <Featured_Games title_light="Live" title_color="Stream"/>
                <TopDownloaded title_light="Top" title_color="Streamers">
                    <ul>
                        <RowData_topStream img="../../../public/Browse/MostPopular_Live/avatar/avatar-01.jpg" user="LahutaM" />
                        <RowData_topStream img="../../../public/Browse/MostPopular_Live/avatar/avatar-01.jpg" user="LahutaM" />
                        <RowData_topStream img="../../../public/Browse/MostPopular_Live/avatar/avatar-01.jpg" user="LahutaM" />
                        <RowData_topStream img="../../../public/Browse/MostPopular_Live/avatar/avatar-01.jpg" user="LahutaM" />
                        <RowData_topStream img="../../../public/Browse/MostPopular_Live/avatar/avatar-01.jpg" user="LahutaM" />
                    </ul>
                </TopDownloaded>
            </section>
                <MostPopular_Live>
                    <div className="cards">
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-05.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-06.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-07.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-06.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-05.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-07.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-06.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />
                <Card action="cs-go" view="1.2k" img_card="../../../public/Streams/stream-05.jpg" img_user="../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name=" Kengan Omeg" title="Just Talking With Fans" btnTitle="Load More Streams" />

                    </div>
    <BtnColor btnTitle="load more streams" width="250px" height = "45px" btnType="btn_color"/>
                </MostPopular_Live>
    </section>
  )
}
