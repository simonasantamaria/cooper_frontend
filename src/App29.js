import React, {useState,useRef, useEffect} from 'react';
import "./style.css";
import pirates_logo from './pirates_logo.png';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

import Drawer from '@mui/material/Drawer';


import ContactUs from './ContactUs.js';


import { styled, useTheme } from '@mui/material/styles';
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
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme_own";

//import{ init } from 'emailjs-com';
//init("user_f3CQB1im3popVTlDE3kA3");
import emailjs from 'emailjs-com';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    firstStyle: {
        backgroundColor: props => props.backgroundColor,
    },
    secondStyle: {
        color: props => props.color,
    },
});


function App() {


  const form = useRef();

  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()

  const classes = useStyles();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id ===id)
    todo.complete = !todo.Complete
    setTodos(newTodos)
  }


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name:name,complete:false}]
    })
    todoNameRef.current.value = null
  }

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const icons = [
      {
      fontSize: 40,
      id: 0,
      avatarIcon: (<HomeIcon/>),
      text: "Home"
      },
      {
      id: 1,
      fontSize: 40,
      avatarIcon: (<DescriptionIcon/>),
      text: "Forms"
      },
      {
      id: 2,
      fontSize: 40,
      avatarIcon: (<AssessmentIcon/>),
      text: "Data Processing"
      },
      {
      id: 3,
      fontSize: 40,
      avatarIcon: (<FolderIcon/>),
      text: "Repository"
      },
      {
      id: 3,
      fontSize: 40,
      avatarIcon: (<AccountBoxIcon/>),
      text: "Account"
      },
      ];

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

const [dataset, setCurrency] = React.useState('chest');


      const [values, setValues] = useState({
            name: '',
            email: '',
            message: '',
      });
      const handleChange = (name)=> (e) => {
            setValues({ ...values, [e.target.id]: e.target.value });
      };

      const isFormValid = () => {
            if (!values.name || !values.email || !values.message) {

          return false;}
          else {
          return true;}

      };

      const sendEmail = (e) => {
        emailjs.sendForm('gmail', 'template_AILAIHUt', e.target, 'user_kPqhCaNpQHv75H92RjVhj')
          .then((result) => {
              console.log(result.text + 'funciona');
          }, (error) => {
              console.log(error.text + 'no funciona');
          });
      }

      const handleSubmit = (e) => {
          // HERE: you always want to prevent default, so do this first
          e.preventDefault()
            if (!isFormValid()) {
               //message of error in the screen, maybe sweet alerts
               console.log('falta algo')
            } else{
              sendEmail(e)
            }
        };






return (
  <div className={classes.section}>
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
              <CardHeader style={{ fontWeight: "fontWeightBold" }} color='primary' className={classes.cardHeader}>
                <h4>Let's create something together </h4>

              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Name..."
                  id="name"
                  required={true}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    required: true,
                    onChange: handleChange(),
                    id:'name',
                    value: values.name,
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Email..."
                  id="email"
                  type='email'
                  required={true}
                  onChange={handleChange()}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    required: true,
                    onChange: handleChange(),
                    id:'email',
                    value: values.email,
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Be free..."
                  id="message"
                  required={true}
                  formControlProps={{
                    size: 'large',
                    rows: '4',
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    required: true,
                    onChange: handleChange(),
                    id:'message',
                    value: values.message,
                    multiline: true,
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputIconsColor}>
                          <SendIcon  className={classes.inputIconsColor}/>
                        </Icon>
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <input type="submit" value="Submit" />
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  </div>
);
}


export default App;
