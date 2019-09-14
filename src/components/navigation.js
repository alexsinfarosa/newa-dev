import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa_logo_lg.svg"
import Image from "./image"

const linkStyle =
  "rounded-full py-4 px-6 bg-white text-gray-700 focus:outline-none focus:shadow-outline hover:text-black"
const activeStyle = "bg-primary-100 text-primary-900"

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-10 text-right">
      <header className="mr-auto w-1/3 max-w-sm">
        <h1 className="text-left">
          <Link
            to="/"
            className="rounded-full py-1 px-3 inline-block focus:outline-none focus:shadow-outline"
          >
            <NewaLogo className="w-64 h-16"></NewaLogo>
          </Link>
        </h1>
        <div className="inline-flex items-center">
          <span className="text-gray-600">in partnership with</span>
          <a
            href="https://www.psu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full py-1 px-3 focus:outline-none focus:shadow-outline"
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
        <li>
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
