import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import UseFetch from '../hooks/useFetch';
import axios from 'axios';

export default function BrowerCollection() {
    const path = useLocation().pathname;
    const {slug} = useParams();
    const [isHome, setHome] = useState(false);
    // const {data, error, loading, reFetch} = UseFetch()

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
        if(path === '/'){
            setHome(true);
      
        }
        
    },[slug])
  return (
    <>
       <div className={ `   ${isHome ? ' dropdown category-dropdown has-border fixed' : "dropdown category-dropdown has-border"}` }>
          <a href="#" className="font-weight-semi-bold category-toggle">
            <i className="d-icon-bars2" />
            <span>Kategoriya</span>
          </a>
          <div className="dropdown-box ">
            <ul className="menu vertical-menu category-menu">
                {
                    data && data?.map(item=>(
                        <li key={item?._id}>
                            <a href={`/category/${item.slug}`} >
                            <div className='inline' dangerouslySetInnerHTML={{ __html: item?.icons }} ></div>
                           
                              {item.categoryName}
                            </a>
                        </li>
                    ))
                }
             
            </ul>
          </div>
        </div>
    </>
  )
}
