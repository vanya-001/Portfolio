import React from 'react';
import "https://cdn.lordicon.com/lordicon.js";

const Education = () => {
  return (
    <div className='w-100 pt-3 h-100 d-flex'>
      <div className='w-50 pt-5 px-5'>
        <div className='d-flex fw-light'>
          <lord-icon
            src="https://cdn.lordicon.com/ylvuooxd.json"
            trigger="loop"
            delay="2000"
            style={{width:"50px", height:"50px"}}>
          </lord-icon>
          <h2 className='my-1/2 mx-2 fs-2'>Education</h2>
        </div>

        <div className='d-flex'>
          <lord-icon
            src="https://cdn.lordicon.com/quvetciz.json"
            trigger="hover"
            style={{width:"100px", height:"100px", marginTop:"10px"}}>
          </lord-icon>
          <p className='mt-4'>
            B.Tech CSE | UPES, Dehradun | 2020-2024 <br />
            Major - Artificial Intelligence and Machine Learning <br />
            Minor - DevOps
          </p>          
        </div>

        <div className='d-flex'>
          <lord-icon
            src="https://cdn.lordicon.com/yqiuuheo.json"
            trigger="hover"
            colors="primary:#1663c7,secondary:#ebe6ef"
            style={{width:"100px", height:"100px", marginTop:"10px"}}>
          </lord-icon>
          <p className='mt-4'>
            Senior Secondary | CBSE | SFS, Aligarh | 2019-2020 <br />
            Stream - PCM with Computers <br />
            10m Air Rifle Shooting
          </p>
        </div>

        <div className='d-flex'>
          <lord-icon
            src="https://cdn.lordicon.com/qwjfapmb.json"
            trigger="hover"
            style={{width:"100px", height:"100px", marginTop:"10px"}}>
          </lord-icon>
          <p className='mt-4'>
            High School | ICSE | GNFCS, Mussoorie | 2017-2018 <br />
            Stream - PCMB with Punjabi <br />
          </p>

        </div>
      </div>

      <div className='w-50 pt-5 px-5 m-5'>
      <lord-icon
            src="https://cdn.lordicon.com/vvqcrgre.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#4bb3fd,tertiary:#3a3347"
            style={{width:"500px",height:"400px"}}>
          </lord-icon>
      </div>
      
    </div>
  )
}

export default Education
