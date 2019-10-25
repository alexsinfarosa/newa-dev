import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser, faSearch } from "@fortawesome/pro-solid-svg-icons"

const linkStyle =
  "block mr-6 py-1 px-0 font-semibold hover:no-underline tracking-wide hover:text-black"

const TopHeader = () => (
  <nav className="flex items-center py-3 px-6 bg-gray-100 text-gray-700">
    <div className="flex items-center mr-auto">
      <span className="font-bold mr-1">Site Status:</span>
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
        activeClassName="text-black border-b border-black"
      >
        NEWA Blog
      </Link>

      <Link
        to="/help"
        className={linkStyle}
        activeClassName="text-black border-b border-black"
      >
        Get Help
      </Link>

      <Link
        to="/login"
        className={linkStyle}
        activeClassName="text-black border-b border-black"
      >
        <FontAwesomeIcon icon={faUser} size="sm" className="mr-2" />
        Login or Create Profile
      </Link>

      <div className="relative ml-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 ml-2" />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          aria-label="Search through site content"
          className="py-2 pl-12 pr-3 rounded-full placeholder-gray-700 focus:outline-none border-2 border-gray-300 focus:outline-none focus:bg-white focus:bg-transparent focus:border-primary-300"
        ></input>
      </div>
    </div>
  </nav>
)

export default TopHeader
