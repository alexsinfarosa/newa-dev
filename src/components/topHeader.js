import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser, faSearch } from "@fortawesome/pro-solid-svg-icons"

const linkStyle =
  "text-gray-700 py-4 px-5 font-medium hover:no-underline hover:text-secondary-800"
const activeLinkStyle = "text-secondary-800 font-medium cursor-default"

const TopHeader = () => (
  <div className="flex items-center py-3 px-6 bg-gray-100">
    <div className="flex items-center mr-auto">
      <b className="mr-1">Website Status</b>
      <FontAwesomeIcon
        icon={faCircle}
        size="xs"
        className="mr-1 fill-current text-green-500"
      />
      <span className="text-gray-700">
        No Problems Reported {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </span>
    </div>

    <ul className="flex items-center">
      <li>
        <Link
          to="/blog"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          NEWA Blog
        </Link>
      </li>
      <li>
        <Link
          to="/help"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          Get Help
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={linkStyle}
          activeClassName={activeLinkStyle}
        >
          <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
          Login/SignUp
        </Link>
      </li>
      <li className="relative ml-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          aria-label="Search through site content"
          className="py-3 pl-10 pr-3 rounded-full placeholder-gray-600 focus:outline-none"
        ></input>
      </li>
    </ul>
  </div>
)

export default TopHeader
