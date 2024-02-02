import React from "react";

export default function HeaderDetalis() {
  return (
    <div>
        {/* product detalis breadcrumb */}
      <div className="product-navigation">
        <ul className="breadcrumb breadcrumb-lg">
          <li>
            <a href="demo-kid.html">
              <i className="d-icon-home" />
            </a>
          </li>
          <li>
            <a href="product.html" className="active">
              Products
            </a>
          </li>
          <li>Detail</li>
        </ul>
        <ul className="product-nav">
          <li className="product-nav-prev">
            <a href="#">
              <i className="d-icon-arrow-left" /> Prev
              <span className="product-nav-popup">
                <img
                  src="images/product/product-thumb-prev.jpg"
                  alt="product thumbnail"
                  width={110}
                  height={123}
                />
                <span className="product-name">Sed egtas Dnte Comfort</span>
              </span>
            </a>
          </li>
          <li className="product-nav-next">
            <a href="#">
              Next <i className="d-icon-arrow-right" />
              <span className="product-nav-popup">
                <img
                  src="images/product/product-thumb-next.jpg"
                  alt="product thumbnail"
                  width={110}
                  height={123}
                />
                <span className="product-name">Sed egtas Dnte Comfort</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
