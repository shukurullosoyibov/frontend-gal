import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MobileMenu() {

  const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/category');
      setData(res.data?.data);
   
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  useEffect(()=>{
    fetchData();
   
},[])
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-overlay"></div>
      <a className="mobile-menu-close" href="#">
        <i className="d-icon-times" />
      </a>
      <div className="mobile-menu-container scrollable">
        
        <ul className="mobile-menu mmenu-anim">
          <li>
            <a href="/">Bosh sahifa</a>
          </li>
          <li>
            <a href="/gallery">Barcha rasmlar</a>
          </li>
          
          <li>
            <a href="#" className="active">
              Kategoriya
            </a>
            <ul>
             {
              data ? data?.map(item =>(
                <li key={item?._id}>
                <a href={`/category/${item.slug}`}>{item?.categoryName}
                <span className="toggle-btn"></span></a>
              </li>
              ))
              :
              null
             
             }
             
            </ul>
          </li>
         
          
        </ul>
      </div>
    </div>
  );
}
