import React, {  useContext, useState } from "react";

import axios from 'axios'
import "./style.css";
import { ImgBaseUrl } from "../constant";
import { useCallback } from "react";
import { useEffect } from "react";
const AllPhotos = () => {
  const [show, setShow] = useState(false);
  const [galle, setGalle] = useState("");
  const [rasm, setData] = useState([]);
  const [ isLoadingGlasses, setLoading] = useState(false);

  //   const {data:allImages, error, loading, reFetch} =  UseFetch('/api/all');
const getAllImages = useCallback(()=>{
  setLoading(true)
      axios.get('/api/all')
      .then(res=>setData(res?.data) )
      .then(res=> console.log(res))
      .then(setLoading(false))
      .catch(err=>console.error(err))
},[])

console.log(rasm);

  const getImg = (imgSrc) => {
    setShow(true);
    setGalle(imgSrc);
  };
  useEffect(()=>{
    getAllImages()
  },[getAllImages])
  return (
    <>
      <h1 className="">All photos</h1>
      <div className={show ? "modal open" : "modal"}>
        <img src={galle} alt={galle} loading="lazy" />
        <button onClick={() => setShow(false)} className="rounded px-4">
          Close
        </button>
      </div>

      <div className="gallery">
        {}
        {!isLoadingGlasses &&
          rasm?.data &&
          rasm?.data?.map((item, i) => (
            <div
              key={item._id}
              className="pics"
              onClick={() => getImg(ImgBaseUrl+item.filepath)}
            >
              <img
                style={{ width: "100%" }}
                src={ImgBaseUrl+item.filepath}
                alt={item.title}
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default AllPhotos;
