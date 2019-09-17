import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa_logo_lg.svg"
import Image from "./image"

const linkStyle =
  "text-gray-600 text-lg py-2 px-0 bg-white font-bold hover:no-underline hover:text-primary-500 tracking-wide"
const activeStyle =
  "text-primary-500 font-bold cursor-default border-b-2 border-primary-500"

const Navigation = () => {
  return (
    <nav className="flex items-center p-6 text-right">
      <header className="mr-auto">
        <h1 className="text-left">
          <Link to="/" className="inline-block">
            <NewaLogo className="w-64 h-16"></NewaLogo>
          </Link>
        </h1>
        <div className="inline-flex items-center">
          <span className="text-gray-700">in partnership with</span>
          <a
            href="https://www.psu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center"
          >
            <Image></Image>
          </a>
        </div>
      </header>

      <ul className="flex">
        <li className="mr-6">
          <Link to="/" className={linkStyle} activeClassName={activeStyle}>
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/weather-data"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Weather Data
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/crop-and-pest-management"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Crop & Pest Management
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/weather-stations"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Weather Stations
          </Link>
        </li>
        <li className="mr-0">
          <Link
            to="/about-us"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
