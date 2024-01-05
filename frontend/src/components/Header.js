import React from 'react';
import { BsStars } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../index.css";

const Header = () => {
  return (
    <header className='fixed shadow-md h-40 px-5 pt-3 md:px-5 z-50'>
      <div className='d-flex justify-content-between align-items-center h-full'>
        <div className=''>
          <h5 className='text-dark m-0 fw-bold'>
            <BsStars /> Vanya Maheshwari
          </h5>
        </div>

        <div className=''>
          <nav className='navbar navbar-light gap-4 text-dark'>
            <Link to={"/"} className='text-decoration-none text-dark fw-bold'>
              About <MdArrowOutward />
            </Link>
            <Link to={"/"} className='text-decoration-none text-dark fw-bold'>
              Education <MdArrowOutward />
            </Link>
            <Link to={"/"} className='text-decoration-none text-dark fw-bold'>
              Work Experience <MdArrowOutward />
            </Link>
            <Link to={"/"} className='text-decoration-none text-dark fw-bold'>
              Contact <MdArrowOutward />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
