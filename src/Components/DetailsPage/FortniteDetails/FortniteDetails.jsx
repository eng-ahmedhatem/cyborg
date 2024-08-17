import React from 'react'

export default function FortniteDetails() {
  return (
    <section className='FortniteDetails'>
        <div className="imgs">
            <div data-aos="zoom-in-right"  data-aos-duration="500" data-aos-delay="200">
            <img src="./Details/feature-left.jpg" alt="" />

            </div>
            <div data-aos="fade-left"  data-aos-duration="500" data-aos-delay="500">
            <img src="./Details/feature-right.jpg" alt="" />
            </div>
        </div>
        <h1 data-aos="flip-down"  data-aos-duration="500" data-aos-delay="500">Fortnite Details</h1>
    </section>
  )
}
