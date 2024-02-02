import React from 'react'
import { useEffect } from 'react'

export default function OwlCarousel({data, error, loading}) {
    
    
  return (
    <div className="col-md-9">
                                
    <div className="owl-carousel owl-theme row owl-dot-inner intro-slider animation-slider cols-1 mb-4"
        data-owl-options="{
        'items': 1,
        'dots': true,
        'nav': false,
        'loop': true,
        'animateOut': 'flipOutY'
    }">
        <div className="banner banner-fixed intro-slide1">
            <figure>
                <img src={ "http://localhost:4000" + data[0]?.filepath} alt={data[0]?.title} width="580"
                    height="460" />
            </figure>
            <div className="banner-content w-100 y-50 text-left">
                <div className="slide-animate"
                    data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}">
                    <h4
                        className="banner-subtitle text-primary text-uppercase font-weight-semi-bold">
                        {data[0]?.description}</h4>
                    <h2 className="banner-title font-weight-bold slide-animate"
                        data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}">
                        {data[0]?.title}
                    </h2>
                    <h3 className="text-body font-weight-normal"><span>*</span>{data[0]?.description} <span>*</span></h3>
                    <a href={data[0]?.link}
                        className="btn btn-outline btn-rounded btn-primary">Shop Now</a>
                </div>
            </div>
        </div>
        <div className="banner banner-fixed intro-slide2">
            <figure>
                <img src={ "http://localhost:4000" + data[0]?.filepath} alt={data[1]?.title} width="580"
                    height="460" />
            </figure>
            <div className="banner-content w-100 y-50 text-right">
                <div className="slide-animate"
                    data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}">
                    <h4
                        className="banner-subtitle text-dark text-uppercase font-weight-semi-bold">
                        {data[1]?.title}</h4>
                    <h2 className="banner-title font-weight-normal slide-animate"
                        data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}">
                       {data[0]?.title}
                    </h2>
                    <h3 className="text-body font-weight-normal"><span>*</span> {data[1]?.description}<span>*</span></h3>
                    <a href={data[1]?.link}
                        className="btn btn-outline btn-rounded btn-primary">Batafsil</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
