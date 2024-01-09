import React from 'react';
import "https://cdn.lordicon.com/lordicon.js";

const Work = () => {
  return (
    <div className='w-100 pt-3 h-100 d-flex'>
    <div className='w-50 pt-5 px-5'>
      <div className='d-flex fw-light'>
        <lord-icon
          src="https://cdn.lordicon.com/lmvawnca.json"
          trigger="hover"
          style={{width:"50px", height:"50px"}}>
        </lord-icon>
          <h2 className='my-1 mx-2 fs-2'>Work Experience</h2>
      </div>
      <div className='mt-4 d-flex'>
        <a role="button" className=' btn btn-primary btn-lg' href="https://kpmg.com/in/en/home.html">
          <p className=' mt-2'>KPMG, India</p>
        </a>
        <p className='mt-1 mx-3'>Trainee Data Analyst <br />
        Jan'24 - Present</p>
      </div>

      <div className='mt-4 d-flex'>
        <a href="https://www.ibm.com/in-en" role='button' className='btn-primary btn btn-lg'>
          <p className='mt-2'>IBM</p>
        </a>
        <p className='mt-1 mx-3'>
          Summer Machine Learning Intern <br />
          Jun'23 - Sep'23
        </p>

      </div>
      

    </div>
    <div className='w-50 pt-5 px-5 m-5'>
      <lord-icon
          src="https://cdn.lordicon.com/eodavnff.json"
          trigger="hover"
          colors="primary:#121131,secondary:#3080e8,tertiary:#104891,quaternary:#9cc2f4"
          style={{width:"500px", height:"300px"}}>
      </lord-icon>
      
    </div>
    </div>    
  )
}

export default Work
