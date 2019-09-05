import React from "react"

import { Box, Typography } from "@material-ui/core"
import Link from "../components/Link"

const Header = ({ siteTitle }) => (
  <Box bgcolor="background.offWhite" p={1} display="flex">
    <Box bgcolor="pink" mr="auto">
      <Typography component="span" variant="subtitle2">
        Website Status o
      </Typography>{" "}
      <Typography component="span" color="textSecondary" variant="subtitle2">
        No Problems Reported {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </Typography>
    </Box>

    <Box bgcolor="orange">
      <Link to="/blog">NEWA Blog</Link>
      <Link to="/help">Get Help</Link>
      <Link to="/login">Login</Link>
      <Link to="/createAccount">Create Account</Link>
    </Box>
  </Box>
)
export default Header
