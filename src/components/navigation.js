import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa-logo.svg"
import pennStateLogo from "../images/Penn-State-logo.jpg"

const linkStyle =
  "rounded-full py-4 px-6 bg-white text-gray-700 focus:outline-none focus:shadow-outline hover:text-black"
const activeStyle = { background: "#F2F8EC", color: "#5C8832" }

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-10">
      <header className="mr-auto bg-orange-100 w-1/3">
        <h1>
          <Link
            to="/"
            className="rounded-full py-1 px-3 inline-block focus:outline-none focus:shadow-outline"
          >
            <NewaLogo className="w-64 h-16"></NewaLogo>
          </Link>
        </h1>
        <div className="flex items-center items-right bg-orange-300">
          <span className="mr-2 text-gray-600">in partnership with</span>
          <a
            href="https://www.psu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full py-1 px-3 focus:outline-none focus:shadow-outline"
          >
            <img
              src={pennStateLogo}
              alt="Penn State Logo"
              className="w-32 object-cover"
            />
          </a>
        </div>
      </header>

      <ul className="flex">
        <li className="mr-2">
          <Link to="/" className={linkStyle} activeStyle={activeStyle}>
            Home
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/weather-data"
            className={linkStyle}
            activeStyle={activeStyle}
          >
            Weather Data
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/crop-and-pest-management"
            className={linkStyle}
            activeStyle={activeStyle}
          >
            Crop & Pest Management
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/weather-stations"
            className={linkStyle}
            activeStyle={activeStyle}
          >
            Weather Stations
          </Link>
        </li>
        <li>
          <Link to="/about-us" className={linkStyle} activeStyle={activeStyle}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
