import React from "react";
import { useEffect } from "react";
import { ImgBaseUrl } from "../constant";

export default function OwlCarousel({ data, error, loading }) {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <div className="col-md-9">
        <div
          className="owl-carousel owl-theme row owl-dot-inner intro-slider animation-slider cols-1 mb-4"
          data-owl-options="{
                              'items': 1,
                              'dots': true,
                              'nav': false,
                              'loop': true,
                              'animateOut': 'flipOutY'
                          }"
        >
          {
            data?.length > 0 && <>
            
          <div className="banner banner-fixed intro-slide1">
            <figure>
              <img
                src={ImgBaseUrl + data[0]?.filepath}
                alt="intro-banner"
                width={580}
                height={460}
              />
            </figure>
            <div className="banner-content w-100 y-50 text-left">
              <div
                className="slide-animate"
                data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}"
              >
                <h4 className="banner-subtitle text-primary text-uppercase font-weight-semi-bold">
                {data[0]?.title.slice(0,10)}
                </h4>
                <h2
                  className="banner-title font-weight-bold slide-animate"
                  data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}"
                >
                   {data[0]?.title.slice(0,10)}
                </h2>
                <h3 className="text-body font-weight-normal">
                  <span>*</span>  {data[0]?.description.slice(0,50)}<span>*</span>
                </h3>
                <a
                  href="/"
                  className="btn btn-outline btn-rounded btn-primary"
                >
                 Batafsil
                </a>
              </div>
            </div>
          </div>
          <div className="banner banner-fixed intro-slide2">
            <figure>
              <img
                  src={ImgBaseUrl + data[1]?.filepath}
                alt="intro-banner"
                width={580}
                height={460}
              />
            </figure>
            <div className="banner-content w-100 y-50 text-right">
              <div
                className="slide-animate"
                data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}"
              >
                <h4 className="banner-subtitle text-dark text-uppercase font-weight-semi-bold">
                  Up To 40% Off
                </h4>
                <h2
                  className="banner-title font-weight-normal slide-animate"
                  data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}"
                >
                  Summer Sale
                </h2>
                <h3 className="text-body font-weight-normal">
                  <span>*</span> Start Shopping Right Now <span>*</span>
                </h3>
                <a
                  href="demo-kid-shop.html"
                  className="btn btn-outline btn-rounded btn-primary"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          </>
      }
        </div>
        
      </div>
    </>
  );
}
