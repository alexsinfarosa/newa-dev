import React from "react"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Link from "../components/Link"
import Container from "@material-ui/core/Container"

const Header = ({ siteTitle }) => (
  <Container maxWidth="sm">
    <Box bgcolor="primary.main" p={1} color="white">
      <Typography component="h1" variant="h4">
        <Link to="/" color="inherit">
          {siteTitle}
        </Link>
      </Typography>
    </Box>
  </Container>
)
export default Header
