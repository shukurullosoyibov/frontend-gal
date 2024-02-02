import React, { useContext, useEffect, useState } from "react";
import Loader from "react-js-loader";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import axios from 'axios'
import { ImgBaseUrl } from "../constant";
export default function AsideRight({ data, loading }) {
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredData, setFilteredData] = useState([]);

  const [load, setload] = useState(false);
  const [items, setAll] = useState([]);
 

  const getAll = useCallback(() => {
    setload(true);
    try {  
      axios.get(`api/search?categorySlug=${data?.data?.categorySlug}`).then((res) => {
         console.log(res.data[0]);
        setAll(res.data);
        setload(false);
      });
   
    } catch (error) {
      console.error(error);
      setload(false);
    } finally {
      setload(false);
    }
  }, []);
  
  useEffect(() => {
    if(!loading){
      getAll();
    }
  
  }, [getAll]);
  if(loading){
    return <Loader type="bubble-scale" bgColor='#04fff0' color="#000" title={"bubble-scale"} size={100} />
  }
  


  return (
    <aside className="col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
      <div className="sidebar-overlay"></div>
      <a className="sidebar-close" href="#">
        <i className="d-icon-times"></i>
      </a>
      <a className="#" class="sidebar-toggle">
        <i className="fas fa-chevron-left"></i>
      </a>
      <div className="sidebar-content">
        <div className="sticky-sidebar">
         

          <div className="widget widget-products border-no">
            <h4 className="widget-title ls-normal">O'xshash rasmlar</h4>
            <div className="widget-body">
              <div
                className="owl-carousel owl-nav-top"
                data-owl-options="{
												'items': 1,
												'loop': false,
												'nav': true,
												'dots': false,
                        'margin': 20}"
              >
                <div className="products-col">
                  
                  {/* {error && <p>Error: {error.message}</p>} */}
                  {load ?  <h1>Loading</h1> : items  &&  (
                    items?.slice(0,3)?.map((item) => (
                      <div key={item?._id} className="product product-list-sm">
                        <figure className="product-media">
                        <Link to={`/detalis/${item?._id}`}>
                            <img
                              src={ImgBaseUrl+item?.filepath}
                              alt="product"
                              width={150}
                              height={150}
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                          <Link to={`/detalis/${item?._id}`}>{item?.title}</Link>
                          </h3>

                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) }
                  {error && <h4>{error}</h4>}
                </div>
                <div className="products-col">
                {load ?  <h1>Loading</h1> :
                  items?.length>3   && 
                  (
                    items?.slice(0,3)?.map((item) => (
                      <div key={item?._id} className="product product-list-sm">
                        <figure className="product-media">
                        <Link to={`/detalis/${item?._id}`}>
                            <img
                              src={ImgBaseUrl+item?.filepath}
                              alt="product"
                              width={150}
                              height={150}
                            />
                          </Link>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                          <Link to={`/detalis/${item?._id}`}>{item?.title}</Link>
                          </h3>

                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )
                }
               
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
