import React from "react";
import { ImgBaseUrl } from "../constant";
import MessageModal from "./MessageModal";
import { useState } from "react";

export default function ZoomImgSection({data}) {
    // console.log(data?.data?.filepath);
    const [isShow, setShow] = useState(false)
  return (
    <>
          {
            isShow && <MessageModal />
          }    
        <div className="product product-single row mb-8">
        <div className="col-md-6">
            <div className="product-gallery">
            <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
                <figure className="product-image">
                <img
                      src={ ImgBaseUrl+ data?.data?.filepath}
                    data-zoom-image="images/demos/demo-kid/product/1.jpg"
                    alt="Blue Pinafore Denim Dress"
                    width={800}
                    height={900}
                />
                </figure>
            </div>
            <div className="product-thumbs-wrap">
                <div className="product-thumbs">
                <div className="product-thumb active">
                    <img
                    src={ ImgBaseUrl+ data?.data?.filepath}
                    alt="product thumbnail"
                    width={109}
                    height={122}
                    />
                </div>
                </div>
                <button className="thumb-up disabled">
                <i className="fas fa-chevron-left" />
                </button>
                <button className="thumb-down disabled">
                <i className="fas fa-chevron-right" />
                </button>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="product-details">
            <h1 className="product-name">{data?.data?.title}</h1>
 
            <p className="product-short-desc">
            {data?.data?.description}
            </p>
            <div className="product-variation-price">
                <span>$239.00</span>
            </div>
            <button onClick={setShow(true)} >
                Send messange
            </button>
            <hr className="product-divider" />
            </div>
        </div>
        </div>
        </>
  );
}
