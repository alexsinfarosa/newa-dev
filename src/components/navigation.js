import { Link } from "gatsby"
import React from "react"

import NewaLogo from "../assets/newa_logo_lg.svg"
import IpmLogo from "./imageComponents/ipmLogo"
import UniversityLogo from "./imageComponents/universityLogo"

const linkStyle =
  "text-primary-600 font-semibold text-lg py-1 px-0 bg-white hover:text-primary--600 hover:border-b-2 hover:border-primary-600 tracking-wide"
const activeStyle = "text-black border-b-2 border-primary-600"

const Navigation = () => {
  return (
    <nav className="flex items-center p-10">
      <header className="mr-auto" style={{ minWidth: 300, maxWidth: 350 }}>
        <h1 className="text-left">
          <Link to="/" className="inline-block" aria-label="NEWA">
            <NewaLogo className="w-64 h-16"></NewaLogo>
          </Link>
        </h1>
        <div className="text-left flex mt-2">
          <div className="inline-block text-gray-700 font-semibold tracking-wider py-2 mr-2">
            in partnership with
          </div>
          <a
              href="https://www.psu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mr-2"
            >
              <IpmLogo></IpmLogo>
            </a>

            <a
              href="https://www.psu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center"
            >
              {/* <UniversityLogo></UniversityLogo> */}
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
            Weather Tools
          </Link>
        </li>
        <li className="mr-6">
          <Link
            to="/crop-and-pest-management"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Crop &amp; IPM Tools
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
