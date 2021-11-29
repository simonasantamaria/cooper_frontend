import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FolderIcon from '@mui/icons-material/Folder';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';




import "./style.css";
import pirates_logo from './pirates_logo.png';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const SERVICE_ID = "service_cgboddf";
const TEMPLATE_ID = "template_7vfo4ds";
const USER_ID = "user_f3CQB1im3popVTlDE3kA3";

const ContactUs = () => {
  const valueRef = useRef();

  const useStyles = makeStyles({
    changeStyle: {
      fontStyle: "normal",
      color: "grey",
      fontsize: "30px"
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: 240,
      zIndex: 400,
      flexShrink: 0
      /*whiteSpace: "nowrap",*/
    },
    boxBackground: {
    backgroundColor: "white",
    fontSize: 30,
    },
    boxBackground2: {
    backgroundColor: "white",
    fontSize: 30
    },
    boxBackground3: {
    backgroundColor: "white",
    fontSize: 30
    },

    gridhidden: {
      background: 'white',
      color: 'white',
      height: 40,
      padding: '0 30px',
      elevation: 0,
      borderBottom: "none"
    },
  })

  const classes = useStyles();


  const [dataset, setCurrency] = React.useState('chest');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency(event.target.value);
        };


  const datasets = [
          {
            value: 'Chest-X-ray-images',
            label: 'Chest-X-ray-images',
          },
          {
            value: 'credit-card-028593',
            label: 'credit-card-028593',
          },
          {
            value: 'geodata',
            label: 'geodata',
          },
          {
            value: 'Insurance',
            label: 'Insurance',
          },
        ];

  const sendEmail = () => {
     console.log(valueRef.current.value)

  };

  return (



      <Box sx={{ display: 'flex', }}   className={classes.boxBackground} >
        <CssBaseline />


          <Box
            noValidate
            autoComplete="off"
          >

            <form noValidate autoComplete="off">
              <div>
              <TextField
                required
                id="user_name"
                label="Name"
                defaultValue="Chris Petrulla"
                variant="standard"
                name="user_name"
                type="text"
                inputRef={valueRef}
              />

              <TextField
                required
                id="user_email"
                label="Email"
                defaultValue="simona.santamaria1@gmail.com"
                variant="standard"
                name="user_email"
              />

              <TextField
                id="outlined-select-currency"
                select
                label="Select Dataset"
                value={dataset}
                onChange={handleChange}
              >
                {datasets.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <button onClick={sendEmail}>
                      Send mail
              </button>
                          </div>
                </form>

          </Box>


        </Box>

  );
};

export default ContactUs;
