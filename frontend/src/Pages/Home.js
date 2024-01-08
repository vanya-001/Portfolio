import React from 'react';
// import { TfiLocationPin } from "react-icons/tfi";
import { MdArrowOutward } from 'react-icons/md';
import image1 from "../image/Image 1.jpg";
import image2 from "../image/Image 2.jpg";
import image3 from "../image/Image 3.jpg";
import "../index.css";
import 'https://cdn.lordicon.com/lordicon.js';

const Home = () => {
  return (
    <>
    <div className='w-100 pt-3 h-100 d-flex'>
      <div className='w-50 pt-5 px-5'>
        <div className='fs-6 fw-light'>
          {/* <TfiLocationPin />  */}
          <lord-icon
              src="https://cdn.lordicon.com/iikoxwld.json"
              trigger="in"
              delay="1"
              state="in-roll-calm"
              style={{ width: '50px', height: '50px' }}
            > 
          </lord-icon>
          <p className='m-0 ms-2'> Aligarh, Uttar Pradesh, India </p> 
          <p className='fs-1'>Hello, <br /> I'm Vanya Maheshwari</p>
          <p className='fs-6 justify-between'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa recusandae accusantium, repellat quis, debitis alias asperiores at quidem in eum dolore. Quam voluptatibus quaerat id ipsam consequatur, numquam voluptatum!</p>
          <br />
          <div className=''>
            <a className="ml-2 text-decoration-none text-dark fw-bold" href="mailto:vanimaheshwari19@gmail.com">
              Email<MdArrowOutward />
            </a>
            <a className="m-3 text-decoration-none text-dark fw-bold"  href="https://www.linkedin.com/in/vanya-maheshwari-183817225/"> 
              LinkedIn<MdArrowOutward />
            </a>
            <a className="mr-2 text-decoration-none text-dark fw-bold"  href="https://github.com/vanya-001">
              Github<MdArrowOutward />
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
    <div className='mx-5 w-50'>
        <div>
          A little about me 
          <p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cum? Atque, quis doloremque! Ex repudiandae tempora consequuntur natus itaque rem unde, illo nemo veniam vel autem est inventore adipisci iusto.
            </p> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit placeat, tempore culpa impedit dicta illo laborum repudiandae dolores facilis quidem temporibus cum, fugit vel magni odio voluptatem est sed aspernatur?
            </p>
          </p>
          
        </div>
        <p className='fst-italic text-decoration-line-through'>Vanya</p>

      </div>
    </>
  )
}

export default Home;
