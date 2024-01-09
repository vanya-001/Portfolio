import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../index.css";
import 'https://cdn.lordicon.com/lordicon.js';

const Header = () => {
  return (
    <header className='fixed shadow-md h-40 px-5 pt-3 md:px-5 z-50'>
      <div className='d-flex justify-content-between align-items-center h-full'>
        <div className='d-flex align-items-center'>
            <lord-icon
              src="https://cdn.lordicon.com/zbblnakr.json"
              trigger="hover"
              colors="primary:#f9c9c0,secondary:#4bb3fd,tertiary:#242424,quaternary:#ebe6ef"
              style={{ width: '50px', height: '50px', marginRight: '5px'}}>
            </lord-icon>
            <h5 className='text-dark m-0 fw-bold'>
            Vanya Maheshwari
            </h5>
        </div>

        <div className=''>
          <nav className='navbar navbar-light gap-4 text-dark'>
            <Link to={"/"} className='text-decoration-none text-dark fw-bold'>
              About <MdArrowOutward />
            </Link>
            <Link to={"/education"} className='text-decoration-none text-dark fw-bold'>
              Education <MdArrowOutward />
            </Link>
            <Link to={"/work"} className='text-decoration-none text-dark fw-bold'>
              Work Experience <MdArrowOutward />
            </Link>
            <Link to={"/contact"} className='text-decoration-none text-dark fw-bold'>
              Contact <MdArrowOutward />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
