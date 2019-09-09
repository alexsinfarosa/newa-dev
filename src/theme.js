import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#E6EBE1",
      main: "#8BBF56",
      dark: "#5C8832",
    },
    secondary: {
      light: "#DFE8ED",
      main: "#3C88CF",
      dark: "#23537C",
    },
    error: {
      main: red.A400,
    },
    background: {
      fafafa: "#fafafa",
      default: "#fff",
    },
  },
})

export default theme
