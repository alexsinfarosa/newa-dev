import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser, faSearch } from "@fortawesome/pro-solid-svg-icons"

const linkStyle =
  "block mr-6 text-gray-700 py-1 px-0 hover:no-underline tracking-wide hover:opacity-75"

const TopHeader = () => (
  <nav className="flex items-center py-3 px-6 bg-gray-100 text-gray-700">
    <div className="flex items-center mr-auto">
      <b className="mr-1">Website Status</b>
      <FontAwesomeIcon
        icon={faCircle}
        size="xs"
        className="mr-1 fill-current text-green-500"
      />
      <span>
        No Problems Reported {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </span>
    </div>

    <div className="flex items-center">
      <Link
        to="/blog"
        className={linkStyle}
        activeClassName="cursor-default border-b border-gray-700 hover:opacity-75"
      >
        NEWA Blog
      </Link>

      <Link
        to="/help"
        className={linkStyle}
        activeClassName="cursor-default border-b border-gray-700 hover:opacity-75"
      >
        Get Help
      </Link>

      <Link
        to="/login"
        className={linkStyle}
        activeClassName="cursor-default border-b border-gray-700 hover:opacity-75"
      >
        <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
        Login/SignUp
      </Link>

      <div className="relative ml-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          aria-label="Search through site content"
          className="py-3 pl-10 pr-3 rounded-full placeholder-gray-700 focus:outline-none border border-gray-100 focus:border focus:border-gray-300"
        ></input>
      </div>
    </div>
  </nav>
)

export default TopHeader
