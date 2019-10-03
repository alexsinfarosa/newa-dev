import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa_logo_lg.svg"
import IpmLogo from "./imageComponents/ipmLogo"
import UniversityLogo from "./imageComponents/universityLogo"

const linkStyle =
  "text-gray-700 font-semibold text-lg py-1 px-0 bg-white hover:no-underline hover:text-black tracking-wide"
const activeStyle = "text-black border-b border-black"

const Navigation = () => {
  return (
    <nav className="flex items-center p-10">
      <header className="mr-auto" style={{ minWidth: 300, maxWidth: 350 }}>
        <h1 className="text-left">
          <Link to="/" className="inline-block" aria-label="NEWA">
            <NewaLogo className="w-64 h-16"></NewaLogo>
          </Link>
        </h1>
        <div className="text-center">
          <div className="text-gray-700 font-semibold tracking-widest py-1">
            in partnership with
          </div>
          <div className="flex justify-end">
            <a
              href="https://www.psu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <IpmLogo></IpmLogo>
            </a>

            <a
              href="https://www.psu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center"
            >
              <UniversityLogo></UniversityLogo>
            </a>
          </div>
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
