import React from "react"

import { makeStyles } from "@material-ui/styles"
import { Box, Typography, Fab } from "@material-ui/core"
import Link from "./Link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser, faSearch } from "@fortawesome/pro-solid-svg-icons"

const useStyles = makeStyles(theme => ({
  mr: {
    marginRight: theme.spacing(5),
  },
  mrSm: {
    marginRight: theme.spacing(2),
  },
  iconColorActive: {
    color: theme.palette.primary.main,
  },
  createAccountBtn: {
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.light,
    },
  },
  searchBtn: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <Box
      bgcolor="background.fafafa"
      px={4}
      py={1}
      display="flex"
      alignItems="center"
    >
      <Box mr="auto">
        <Typography component="span" variant="subtitle2">
          <b>Website Status</b>{" "}
          <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className={classes.iconColorActive}
          />
        </Typography>{" "}
        <Typography component="span" color="textSecondary" variant="subtitle2">
          No Problems Reported {new Date().toLocaleDateString()}{" "}
          {new Date().toLocaleTimeString()}
        </Typography>
      </Box>

      <Box component="nav">
        <Link to="/blog" className={classes.mr} color="textPrimary">
          NEWA Blog
        </Link>

        <Link to="/help" className={classes.mr} color="textPrimary">
          Get Help
        </Link>
        <Link to="/login" className={classes.mr} color="textPrimary">
          Login
        </Link>

        <Link to="/createAccount" className={classes.mrSm} underline="none">
          <Fab
            variant="extended"
            aria-label="create account"
            className={classes.createAccountBtn}
          >
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              style={{ marginRight: 8 }}
            />
            Create Account
          </Fab>
        </Link>

        <Fab aria-label="search" className={classes.searchBtn}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Fab>
      </Box>
    </Box>
  )
}
export default Header
