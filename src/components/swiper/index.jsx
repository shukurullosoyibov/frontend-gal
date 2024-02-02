import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { ImgBaseUrl } from '../constant';

export default function CustomSwiper({imageData, getImg}) {
    console.log(imageData);
    const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            imageData && imageData?.map((item)=>(
                <SwiperSlide key={item._id}>{


                    <div className="product text-center">
                              <figure className="product-media">
                             
                                  <img
                                    src={ImgBaseUrl + item.filepath}
                                    alt="product"
                                    width={300}
                                    onClick={() =>
                                      getImg(ImgBaseUrl + item.filepath)
                                    }
                                    height={332}
                                  />
                               
                              </figure>
                              <div className="product-details">
                                <h3 className="product-name">
                                  <a href={`/detalis/${item._id}`} >{item.title}</a>
                                </h3>
                                <div className="product-action">
                                  <a
                                    href={`/detalis/${item._id}`}
                                    style={{
                                        border: '1px solid #42A4E',
                                        maxWidth: '20rem',
                                        color: '#42A4E'
                                    }}
                                    className=" btn border-[#42A4E] max-w-[20rem] hover:bg-[#42A4E8]"
                                    title="Add to cart"
                                  >
                                    Batafsil
                                  </a>
                                </div>
                              </div>
                              </div>
                }</SwiperSlide>
            ))
        }
        
      </Swiper>
    </>
  );
}
