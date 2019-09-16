import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa_logo_lg.svg"
import Image from "./image"

const linkStyle =
  "text-gray-700 text-lg py-4 px-4 bg-white font-semibold hover:no-underline hover:text-primary-500"
const activeStyle = "text-primary-700 font-semibold cursor-default"

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
            className="ml-3"
          >
            <Image></Image>
          </a>
        </div>
      </header>

      <ul className="flex">
        <li className="mr-2">
          <Link to="/" className={linkStyle} activeClassName={activeStyle}>
            Home
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/weather-data"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Weather Data
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/crop-and-pest-management"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Crop & Pest Management
          </Link>
        </li>
        <li className="mr-2">
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
