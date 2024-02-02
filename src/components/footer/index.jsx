import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await axios.get("/footer");
    setData(res.data?.data[0]);
  };
  useEffect(() => {
   
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Sizning scroll qilgan joyingizni tekshirish
        getData(); // So'ro'vni yuborish
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Komponent bekor qilinayotganda eskiyalarini olib tashlash
    };
  }, []);

  return (
    <footer className="footer appear-animate">
      <div className="container">
        <div className="footer-middle">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widget-about">
                <a href="demo-kid.html" className="logo-footer">
                  <img
                    src="images/demos/demo-kid/logo-footer.png"
                    alt="logo-footer"
                    width={150}
                    height={43}
                  />
                </a>
                {data && (
                  <div className="widget-body">
                    <p>{data?.description}</p>

                    <Link to="/">Riode@example.com</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <figure className="payment">
              <img
                src="images/payment.png"
                alt="payment"
                width={159}
                height={29}
              />
            </figure>
          </div>
          <div className="footer-center">
            {data && <p className="copyright">{data?.copy?.title}</p>}
          </div>
          <div className="footer-right">
            <div className="social-links">
              {data &&
                data?.socialLink?.map((item, ind) => (
                  <Link
                    key={item?._id}
                    to={item?.link}
                    title="social-link"
                    className={` ${
                      item?.title.toLowerCase() === "facebook"
                        ? "social-link social-facebook fab fa-facebook-f"
                        : item?.title.toLowerCase() === "twitter"
                        ? "social-link social-twitter fab fa-twitter"
                        : "social-link social-instagram fab fa-instagram"
                    }    `}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
