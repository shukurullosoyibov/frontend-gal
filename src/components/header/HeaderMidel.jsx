import React from "react";
import { Link } from "react-router-dom";
import { ImgBaseUrl } from "../constant";

export default function HeaderMidel({data}) {
 
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left">
          <a href='/' className="mobile-menu-toggle">
            <i className="d-icon-bars2" />
          </a>
          {
            data &&
            <a href='/' className="logo">
                <img
                
                  src={ImgBaseUrl+data?.filepath}
                  alt="logo"
                  width={153}
                  height={44}
                />
               
              </a>
          }
          
          <div className="header-search hs-simple">
            <form  className="input-wrapper">
              <input
                type="text"
                className="form-control"
                name="search"
                autoComplete="off"
                placeholder="Search..."
              
              />
              <button
                className="btn btn-search"
                
                title="submit-button"
              >
                <i className="d-icon-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="header-right">
          <a href="tel:#" className="icon-box icon-box-side">
            <div className="icon-box-icon mr-0 mr-lg-1">
              <i className="d-icon-phone" />
            </div>
            {
              data && 
                <div className="icon-box-content d-lg-show mb-1">
                  <span className="icon-box-title mb-1 d-inline-block">
                    {data?.call[0]?.title}
                  </span>
                  <p> {data?.call[0]?.callNumber}</p>
                </div>
            }
            
          </a>
          <span className="divider" />
          {/* <div className="dropdown cart-dropdown type2 off-canvas mr-0 mr-lg-2">
            <div className="dropdown-box">
              <div className="canvas-header">
                <h4 className="canvas-title">Shopping Cart</h4>
                <a
                  href="#"
                  className="btn btn-dark btn-link btn-icon-right btn-close"
                >
                  close
                  <i className="d-icon-arrow-right" />
                  <span className="sr-only">Cart</span>
                </a>
              </div>
              <div className="products scrollable">
                <div className="product product-cart">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/cart/product-1.jpg"
                        alt="product"
                        width={80}
                        height={88}
                      />
                    </a>
                    <button className="btn btn-link btn-close">
                      <i className="fas fa-times" />
                      <span className="sr-only">Close</span>
                    </button>
                  </figure>
                  <div className="product-detail">
                    <a href="product.html" className="product-name">
                      Riode White Trends
                    </a>
                    <div className="price-box">
                      <span className="product-quantity">1</span>
                      <span className="product-price">$21.00</span>
                    </div>
                  </div>
                </div>
                <div className="product product-cart">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/cart/product-2.jpg"
                        alt="product"
                        width={80}
                        height={88}
                      />
                    </a>
                    <button className="btn btn-link btn-close">
                      <i className="fas fa-times" />
                      <span className="sr-only">Close</span>
                    </button>
                  </figure>
                  <div className="product-detail">
                    <a href="product.html" className="product-name">
                      Dark Blue Women’s Leomora Hat
                    </a>
                    <div className="price-box">
                      <span className="product-quantity">1</span>
                      <span className="product-price">$118.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-total">
                <label>Subtotal:</label>
                <span className="price">$139.00</span>
              </div>
              <div className="cart-action">
                <a href="cart.html" className="btn btn-dark btn-link">
                  View Cart
                </a>
                <a href="checkout.html" className="btn btn-dark">
                  <span>Go To Checkout</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
