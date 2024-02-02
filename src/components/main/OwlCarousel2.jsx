import React from 'react'
import { useEffect } from 'react'
import { ImgBaseUrl } from '../constant'

export default function OwlCarousel2({data, error, loading}) {
 
  if(loading){
    return null
  }
  return (
    <div className="col-md-3">
  <div className="row">
    <div className="col-md-12 col-xs-6">
      <div className="banner banner-fixed intro-banner1 mb-4 overlay-light">
        <figure>
          <img src={ImgBaseUrl+data[1]?.filepath} alt="banner" width={280} height={236} style={{backgroundImage: '#fba9c0'}} />
        </figure>
        <div className="banner-content appear-animate">
          <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">
          {data[1]?.descriptio}</h4>
          <h3 className="banner-title ls-m text-dark font-weight-normal">{data[1]?.title}
          </h3>
          <a href={data[1].link} className="btn btn-underline btn-link">Batafsil
            <i className="d-icon-arrow-right" /></a>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-xs-6">
      <div className="banner banner-fixed intro-banner2 mb-4 overlay-light">
        <figure>
          <img src={ImgBaseUrl+data[2]?.filepath} alt="banner" width={280} height={236} style={{backgroundImage: '#42a3e8'}} />
        </figure>
        <div className="banner-content appear-animate">
          <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">
          {data[4]?.title}</h4>
          <h3 className="banner-title ls-m text-dark font-weight-normal">{data[2]?.title}
          </h3>
          <a href={data[2].link} className="btn btn-underline btn-link">Batafsil
            <i className="d-icon-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
