import React, { useEffect } from "react";
import AsideRight from "../../../components/ProducDetalis/AsideRight";

import Loader from "react-js-loader";

import ImgDetalis from "../../../components/ProducDetalis/ImgDetalis";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "../../../assets/css/animate.min.css";
import "../../../assets/css/demo-kid.min.css";
import { useState } from "react";
import { useCallback } from "react";

import { ImgBaseUrl } from "../../../components/constant";
export default function ProductDetalis() {
  const { id } = useParams();

  const [loading, setimageLoading] = useState(false);
  const [data, setAll] = useState([]);

  const getData = useCallback(() => {
    setimageLoading(true);
    axios
      .get(`/api/${id}`)
      .then((res) => {
        console.log(res.data);
        setAll(res.data); // Ma'lumotlarni `setAll` orqali o'rnating
        setimageLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]); // `id` o'zgaruvchisi o'zgarganda faqatgina `getData` funktsiyasi qayta ishlaydi

  useEffect(() => {
    getData(); // `getData` funktsiyasini useEffect orqali chaqirish
  }, [getData]);
  if (loading) {
    return (
      <Loader
        type="bubble-scale"
        bgColor="#04fff0"
        color="#000"
        title={"Loading..."}
        size={100}
      />
    );
  }
  return (
    <main className="main single-product">
      <div className="page-content mb-8">
        <div className="container">
          <div className="product-navigation">
            <ul className="breadcrumb breadcrumb-lg">
              <li>
                <a href="/">
                  <i className="d-icon-home" />
                </a>
              </li>
              <li>
                <Link to={`/detalis/${id}`} className="active">
                  Photo
                </Link>
              </li>
            </ul>
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="row gutter-lg">
              <AsideRight data={data} loading={loading} />
              <div class="col-lg-9">
                <>
                  {/* <MessageModal _id={id} filepath={data?.data?.filepath} setShow={setShow} isShow={isShow}   /> */}
                  {data?.data ? (
                    <div className="product product-single row mb-8">
                      <div className="col-md-6">
                        <div className="product-gallery">
                          <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
                            <figure className="product-image">
                              <img
                                src={ImgBaseUrl + data?.data?.filepath}
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
                                  src={ImgBaseUrl + data?.data?.filepath}
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
                          {/* <button onClick={() => {
                          alert(isShow)
                          setShow(true)}}>
                          Send 
                        </button> */}
                          <hr className="product-divider" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <h1>Loading</h1>
                  )}
                </>

                <ImgDetalis data={data} loading={loading} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
