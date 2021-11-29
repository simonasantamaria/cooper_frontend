import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9e9e9e",
    },
    secondary: {
      main: "#9e9e9e",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#9e9e9e",
    },
    paper: {
  background: "#9e9e9e"
}
  },
});

export default theme;
