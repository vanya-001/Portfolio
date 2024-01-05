import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { MdArrowOutward } from 'react-icons/md';
import image1 from "../image/Image 1.jpg";
import image2 from "../image/Image 2.jpg";
import image3 from "../image/Image 3.jpg";
import "../index.css";

const Home = () => {
  return (
    <div className='w-100 pt-5 h-100 d-flex'>
      <div className='w-50 pt-5 px-5'>
        <div className='fs-6 fw-light'><TfiLocationPin />Aligarh, Uttar Pradesh, India
          <p className='fs-1'>Hello, <br /> I'm Vanya Maheshwari</p>
          <p className='fs-6 justify-between'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa recusandae accusantium, repellat quis, debitis alias asperiores at quidem in eum dolore. Quam voluptatibus quaerat id ipsam consequatur, numquam voluptatum!</p>
          <br />
          <div className=''>
            <a className="m-2 text-decoration-none text-dark fw-bold" href="mailto:vanimaheshwari19@gmail.com">
              Email <MdArrowOutward />
            </a>
            <a className="m-2 text-decoration-none text-dark fw-bold"  href="https://www.linkedin.com/in/vanya-maheshwari-183817225/"> 
              LinkedIn <MdArrowOutward />
            </a>
            <a className="m-2 text-decoration-none text-dark fw-bold"  href="https://github.com/vanya-001">
              Github <MdArrowOutward />
            </a>
          </div>       
        </div>
      </div>
      <div className='w-50 pt-5 px-5' id="rainbow">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-50 rounded-circle mx-auto shadow-sm" src={image1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-50 rounded-circle mx-auto shadow-sm" src={image2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-50 rounded-circle mx-auto shadow-sm" src={image3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
