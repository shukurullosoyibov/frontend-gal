import React, { useEffect, useState } from 'react'
// import DescriptionSection from './Description'
import Additional from './Additional'
import Reviews from './Reviews'


// import DescriptionSection from './DescriptionSection'

export default function ImgDetalis({data, loading}) {
    const [isActive, setActive] = useState('description')
    
  
if(loading){
    return 
}


  return (
    <div className="tab tab-nav-simple product-tabs mt-2 mb-4">
             <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item cursor-pointer">
                    <span className={`${isActive ==='description' ? "nav-link active" : "nav-link"}`} onClick={()=>setActive('description')}>Description</span>
                </li>
                <li className="nav-item cursor-pointer">
                    <span className={`${isActive ==='reviews' ? "nav-link active" : "nav-link"}`} onClick={()=>setActive('reviews')}>Reviews</span>
                </li>
                            
            </ul>
            <div className='tab-content' >
               { !loading ? <>
                <Additional data={data} isActive = {isActive}/> 
                <Reviews data={data} isActive = {isActive} /> </>: null}                
            </div>
    </div>
  )
}

