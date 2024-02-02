import React from 'react'
import { useState } from 'react';
import { ImgBaseUrl } from '../constant';

export default function MessageModal({_id, filename, filepath, setShow, isShow}) {
    const [message, setMessage] = useState('')
    const [firstname, setFirstName] = useState('')
    // const [message, setMessage] = useState('')
  const token = "6641476611:AAEg4I2WniIRzwoqmiI8bcILk7bHD34UEZc";
  const cahtID = "349041722";
//   const  handleSend =  async() =>{
//         const formData = new FOm
//       let data = ` https://api.telegram.org/bot${token}/sendMessage?chat_id=${cahtID}&text=${formData}`
//   }
  return (
    <>

    <div  className={`${isShow ? " modal open" : "modal"}  `}>
          <button className='absolute top-3 right-3 bg-black text-white cursor-pointer rounded-sm' onClick={()=>setShow(false)} >Close</button>
    
            <div className='bg-slate-200 rounded-md p-4 grid place-items-center '>
                 <form>
                    <div className='form-group'>
                            <label htmlFor='firstname'>
                               Ism
                            </label>
                            <input type="text" id='firstname' value={firstname} onChange={(e)=> setFirstName(e.target.value)} />
                            
                    </div>
                    <div className='form-group'>
                            <label htmlFor='message'>
                               Ism
                            </label>
                            <textarea rows={5} type="text" id='message' value={message} onChange={(e)=> setMessage(e.target.value)} />
                            
                    </div>
                    <img src={ImgBaseUrl + filepath}  alt={filename || "rasm"} />
                    <button
                        className=" bg-slate-700 text-white rounded-sm cursor-pointer p-2 "
                    
                    >Yuborish</button>
                 </form>
            </div>
    
    </div>
    </>
  )
}
