import React from "react";
import { Link } from "react-router-dom";
import * as Bi from "react-icons/bi";
import ContactUs from "./../../pages/ContactUs";
import DropdownNav from "./../../components/elements/DropdownNav/DropdownNav";

const Navbar = () => {
  function searchFrom(e) {
    e.preventDefault();
  }
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          Hekto
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop"}>
                Products
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/blogs"}>
                Blog
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/shop"}>
                Shop
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/contact-us"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about-us"}>
                About Us
              </Link>
            </li> */}
          </ul>
          <form
            onSubmit={searchFrom}
            className="search-navbar d-none d-lg-flex"
            role="search"
          >
            <input className="form-search" type="search" aria-label="Search" />
            <button className="btn-search" type="submit">
              <Bi.BiSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
