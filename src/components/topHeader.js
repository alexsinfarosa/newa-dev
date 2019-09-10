import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser, faSearch } from "@fortawesome/pro-solid-svg-icons"

const linkStyle =
  "rounded-full py-4 px-6 bg-fafafa focus:outline-none focus:shadow-outline hover:underline"
const activeStyle = {
  background: "#F2F8EC",
  color: "#5C8832",
  cursor: "default",
}

const TopHeader = ({ siteTitle }) => (
  <div className="flex items-center py-3 px-10 bg-fafafa">
    <div className="flex items-center mr-auto">
      <b className="mr-1">Website Status</b>
      <FontAwesomeIcon
        icon={faCircle}
        size="xs"
        className="mr-1 fill-current text-primary-500"
      />
      <span className="text-gray-700">
        No Problems Reported {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </span>
    </div>

    <ul className="flex items-center">
      <li className="mr-4">
        <Link to="/blog" className={linkStyle} activeStyle={activeStyle}>
          NEWA Blog
        </Link>
      </li>
      <li className="mr-4">
        <Link to="/help" className={linkStyle} activeStyle={activeStyle}>
          Get Help
        </Link>
      </li>
      <li className="mr-4">
        <Link
          to="/login"
          className="rounded-full py-4 px-6 focus:outline-none focus:shadow-outline bg-secondary-100 hover:bg-secondary-500 hover:text-white text-secondary-900"
        >
          <FontAwesomeIcon icon={faUser} size="lg" className="mr-3" />
          Login/SignUp
        </Link>
      </li>
      <li className="rounded-full focus:outline-none focus:shadow-outline bg-primary-100 hover:bg-primary-500 hover:text-white text-primary-900 py-3 px-4">
        <FontAwesomeIcon
          icon={faSearch}
          className="focus:outline-none focus:shadow-outline"
        />
      </li>
    </ul>
  </div>
)

export default TopHeader
