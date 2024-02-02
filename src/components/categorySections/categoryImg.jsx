import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { ImgBaseUrl } from "../constant";
export default function CategoryImg({error, data, getImg}) {


  return (
    <div className="row gallery cols-2 cols-sm-3 cols-md-4 product-wrapper">
      {
        data ? 
        data?.map((item, ind)=>(

        
        <div key={item?._id} className="product text-center mb-4">
        <figure className="product-media">
         
          <div className="pics" onClick={()=> getImg(ImgBaseUrl+item?.filepath)}>
            <img
      
              src={ImgBaseUrl+item?.filepath}
              alt={item?.filename}
              width={300}
              height={332}

            />
            <img
              src={ImgBaseUrl+item?.filepath}
              alt={item?.filename}
              className="-scale-x-1"
              width={300}
              height={332}
            />
          </div>
          {/* <div className="product-label-group">
            <label className="product-label label-sale">27% off</label>
          </div> */}
          {/* <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-wishlist"
              title="Add to wishlist"
            >
              <i className="d-icon-heart" />
            </a>
            <a
              href="#"
              className="btn-product-icon btn-quickview"
              title="Quick View"
            >
              <i className="d-icon-search" />
            </a>
          </div> */}
        </figure>
        <div className="product-details">
          <h3 className="product-name">
            <a href="demo-kid-product.html">{item.title}</a>
          </h3>
          
          {/* <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: "100%" }} />
              <span className="tooltiptext tooltip-top" />
            </div>
            <a href="demo-kid-product.html" className="rating-reviews">
              ( 6 reviews )
            </a>
          </div> */}
          <div className="product-action">
            <Link to={`/detalis/${item?._id}`}
              style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:"center', flex"}}
              className="btn-product btn-cart flex  item-center"
              data-toggle="modal"
              data-target="#addCartModal"
              title="Add to cart"
            >
          
              Batafsil
                <i className="fa-solid ml-3  fa-angle-right"/>
            </Link>
          </div>
        </div>
      </div>
      ))
      :
      error && <h1>{error}</h1>
      }
     
    </div>
  );
}
