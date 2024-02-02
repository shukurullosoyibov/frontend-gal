import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImgBaseUrl } from "../../constant";
import Loader from "react-js-loader";
export default function OurIndex() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const data = await axios.get("/instagram/all");
      setData(data?.data?.data);
  

    } catch (error) {console.error(error.message);}
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
  
      getData();

  }, []);
  if(loading){
    return <Loader type="bubble-scale" bgColor='#04fff0' color="#000" title={"Loading..."} size={100} />
  }
  return (
    <section
      className="pt-7 appear-animate mb-10 pb-8"
      style={{ marginBottom: "-1px" }}
    >
      <h2 className="title title-underline with-link cursor-pointer title-underline">
        <span >Our Instagram</span>
      </h2>
    
        <div
          className="owl-carousel owl-theme row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                            'items': 6,
                            'nav': false,
                            'loop': true,
                            'dots': false,
                            'margin': 20,
                            'autoplay': true,
                            'autoplayTimeout': 4000,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '576': {
                                    'items': 3
                                },
                                '768': {
                                    'items': 4
                                },
                                '992': {
                                    'items': 5
                                },
                                '1200': {
                                    'items': 6
                                }
                            }
                        }"
        >
          {
           
          data.length>0 &&
            data?.map((item, ind) => (
              <figure
                key={item?._id}
                className="instagram appear-animate"
                data-animation-options="{
                                        'name': 'fadeIn'
                                    }"
              >
                <Link to={item?.link}>
                  <img
                    src={ImgBaseUrl + item?.filepath}
                    alt="Instagram"
                    width={220}
                    height={220}
                  />
                </Link>
              </figure>
            ))
            
            }
        </div>
      
    </section>
  );
}
