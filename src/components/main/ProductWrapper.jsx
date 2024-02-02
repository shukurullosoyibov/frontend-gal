import React, {  useCallback, useEffect, useState } from "react";
import Loader from "react-js-loader";
import axios from "axios";
import "./style.css";
import CustomSwiper from "../swiper";
import { toast } from "react-toastify";
export default function ProductWrapper() {

  const [filterCategory, setFiltercategory] = useState([]);
  const [isActive, setActive] = useState(filterCategory[0]?.slug || "");
  const [show, setShow] = useState(false);
  const [newLoading, setNewLoading] = useState(false);
  const [imageLoading, setimageLoading] = useState(false);
  const [galle, setGalle] = useState([]);
  const [imageData, setAll] = useState([]);
  const getAllCategory = useCallback  ( () => {
    setNewLoading(true);
    try {
      axios.get("/category/search?featured=true")
             .then(res => {
              if(res?.data){
                setFiltercategory(res.data);
               }
            })
            .catch(err => {
              toast.error(err.massage)
            })
     
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  }, []);
  const getAll = async (slug) => {
    setimageLoading(true);
    try {
      let res = await axios.get(`/api/search?categorySlug=${slug}`);
      setAll(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setimageLoading(false);
    }
  };
  useEffect(() => {
    getAll(isActive);
  }, [isActive]);
  useEffect(() => {
    getAllCategory();
  }, []);
  const getImg = (imgSrc) => {
    setShow(true);
    setGalle(imgSrc);
  };

  if (newLoading) {
    return <Loader type="bubble-scale" bgColor='#04fff0' color="#000" title={"Loading..."} size={100} />
  }
  return (
    <>
      <div className={show ? "modal open" : "modal"}>
        <img src={galle} alt={galle} loading="lazy" />
        <button onClick={() => setShow(false)} className="button rounded px-4">
          Close
        </button>
      </div>

      <section
        className="product-wrapper pt-2 mt-10 appear-animate"
        data-animation-options="{
        'delay': '.5s'
    }"
      >
        <div className="tab tab-nav-center">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            {!newLoading
              ? filterCategory &&
                filterCategory?.map((item) => (
                  <li key={item?._id} className="nav-item cursor-pointer">
                    <span
                      className={`${
                        item.slug === isActive ? "nav-link active" : "nav-link"
                      }`}
                      onClick={() => setActive(item.slug)}
                    >
                      {item?.categoryName}
                    </span>
                  </li>
                ))
              : <Loader type="bubble-scale" bgColor='#04fff0' color="#000" title={"Loading..."} size={100} />}
          </ul>
          {
            <div className="tab-content">
              {!imageLoading ? (
                <CustomSwiper
                  getImg={getImg}
                  imageData={imageData}
                  imageLoading={imageLoading}
                />
              ) : 

              <Loader type="bubble-scale" bgColor='#04fff0' color="#000" title={"Loading..."} size={100} />}
            </div>
          }
        </div>
      </section>
    </>
  );
}
