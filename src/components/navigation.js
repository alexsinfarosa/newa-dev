import React from "react"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Box, Typography } from "@material-ui/core"
import Link from "./Link"

import NewaLogo from "../assets/newa-logo.svg"

const useStyles = makeStyles(theme => ({
  mr: {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: 50,
    marginRight: theme.spacing(1),
    fontWeight: "normal",
  },
  color: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const theme = useTheme()

  const activeStyle = {
    background: theme.palette.primary.light,
    padding: theme.spacing(2),
    borderRadius: 50,
    color: theme.palette.primary.dark,
  }

  return (
    <Box display="flex" alignItems="center" px={4} py={5}>
      <Box mr="auto" width={360}>
        <NewaLogo width={220} height="auto"></NewaLogo>
        <Box mb={1}></Box>
        <Typography align="center" color="textSecondary">
          in partnership with <span className={classes.color}>PennState</span>
        </Typography>
      </Box>

      <Box component="nav">
        <Link
          to="/"
          className={classes.mr}
          color="textPrimary"
          variant="h6"
          activeStyle={activeStyle}
        >
          Home
        </Link>
        <Link
          to="/weatherData"
          className={classes.mr}
          color="textPrimary"
          variant="h6"
          activeStyle={activeStyle}
        >
          Weather Data
        </Link>
        <Link
          to="/cropPestManagement"
          className={classes.mr}
          color="textPrimary"
          variant="h6"
          activeStyle={activeStyle}
        >
          Crop & Pest Management
        </Link>
        <Link
          to="/weatherStations"
          className={classes.mr}
          color="textPrimary"
          variant="h6"
          activeStyle={activeStyle}
        >
          Weather Stations
        </Link>
        <Link
          to="/aboutUs"
          className={classes.mr}
          color="textPrimary"
          variant="h6"
          activeStyle={activeStyle}
          style={{ marginRight: 0 }}
        >
          About Us
        </Link>
      </Box>
    </Box>
  )
}

export default Navigation
