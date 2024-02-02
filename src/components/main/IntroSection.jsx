import React from 'react'
import OwlCarousel from './owlCarousel'
import OwlCarousel2 from './OwlCarousel2'
import ServisList from './ServisList'
import UseFetch from '../hooks/useFetch'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function IntroSection() {
  // const {data, error, loading}  = UseFetch('/header/all')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState(false);
  // const {data, loading, error} = UseFetch()
  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      finally{

        setLoading(false);
      }
    };
    fetchData('/header/all');
    setTimeout(()=>{
     setMode(true)
    
    },1000)
  }, []);
  
  return (
    <section class="intro-section">
        <div class="row">
        {  !mode ? <h2>Loading</h2> : data && <>
            <OwlCarousel data={data?.data} eroor={error} loading={loading} />
            <OwlCarousel2 data={data?.data} eroor={error} loading={loading} />
            </>
          
  }
        </div>
        <ServisList />
    </section>
  )
}
