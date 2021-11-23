import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@mui/material/colors/blue';

const theme_old = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const theme = createMuiTheme(
{

  palette: {
    type: 'light',
    primary: {
      main: '#d21016',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ff0000',
    },
    text: {
      primary: 'rgba(253,38,210,0.87)',
    },
  },
  spacing: 8,
},
);



export default theme;
