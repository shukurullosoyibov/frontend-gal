import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMidel from './HeaderMidel'
import HeaderBottom from './HeaderBottom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function HeaderSection() {
     
     const [data, setData] = useState(null);
      const getData = async () =>{
        const res = await axios.get("/menu-header");
           setData(res.data.data[0])
           console.log(res.data.data[0]);
           
      }

      useEffect(()=>{
        getData ();
    },[])
  return (
    <header className='header'>
      <HeaderTop data={data}/>
      <HeaderMidel data={data} />
      <HeaderBottom/>
    </header>
  )
}
