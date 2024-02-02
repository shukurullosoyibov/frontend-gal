import React, { useContext, useEffect, useState } from 'react'
import CategoryImg from './categoryImg'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomInputProvider from '../context/CategoryContect'
import { useCallback } from 'react';
import './style.css'
import { ImgBaseUrl } from '../constant';
export default function CategorySection() {
    // api/category?category=Tabiat
    const [show, setShow] = useState(false);
    const [galle, setGalle] = useState("");
    // const { data:category, error:catErr, loading:catLoading, reFetch } = useContext(CustomInputProvider);
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {slug} = useParams();
  const splittedSlug = slug.split('/')
  const getImg = (imgSrc) => {
    setShow(true);
    setGalle(imgSrc);
  };
  const fetchData = useCallback(() => {
		setLoading(true);
		axios.get(`api/category/${splittedSlug[0]}`)
			.then((res) => {
				setData(res.data)

			})
			.catch((err) =>  setError(err))
      setLoading(false)
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

  if(loading){
    return null
  }
  return (
   <><h1 className="">All photos</h1>
   <div className={show ? "modal open" : "modal"}>
     <img src={galle} alt={galle} loading="lazy" />
     <button onClick={() => setShow(false)} className="rounded px-4">
       Close
     </button>
   </div>

       <main className="main mb-10 pb-2">
           <div className="page-header" style={{backgroundImage: `url(${ImgBaseUrl + data[0]?.filepath})`, backgroundColor: '#fee3d8'}}>
                <h1 className="page-title font-weight-bold">
                {data[0]?.title}</h1>
               
                </div>

            <div className="page-content">
               <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                    <li><a href="/"><i className="d-icon-home" /></a></li>
                    <li className="active cursor-pointer hover:text-blue-400">Kategoriya</li>
                    </ul>
                </div>
                </nav>

                <div className="container ">
                    {
                      loading ? <h1>Loading...</h1> :
                         <CategoryImg data={data} error={error}  getImg={ getImg} />
                    }
                    
                   
                   <nav className="toolbox toolbox-pagination">
                        {/* <p className="toolbox-item show-info d-block">Showing <span>12 of 56</span> Products</p> */}
                        <p className="toolbox-item show-info d-block">Showing <span>{data?.length}</span> Products</p>
                        {/* <ul className="pagination">
                            <li className="page-item disabled">
                            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                                <i className="d-icon-arrow-left" />Prev
                            </a>
                            </li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                Next<i className="d-icon-arrow-right" />
                            </a>
                            </li>
                        </ul> */}
                        </nav>

                </div>
            </div>
            
        </main>
        </>
  
  )
}
