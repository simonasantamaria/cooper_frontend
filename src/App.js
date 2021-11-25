import React, {useState,useRef, useEffect} from 'react';
import "./style.css";
import pirates_logo from './pirates_logo.png';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

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
//import{ init } from 'emailjs-com';
//init("user_f3CQB1im3popVTlDE3kA3");
import emailjs from 'emailjs-com';
const SERVICE_ID = "service_cgboddf";
const TEMPLATE_ID = "template_7vfo4ds";
const USER_ID = "user_f3CQB1im3popVTlDE3kA3";




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const LOCAL_STORAGE_KEY = 'todoApp.todos'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar2 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer2 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


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
    width: drawerWidth,
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



function App() {

  const [email, setEmail] = React.useState("");

  function handleClick() {
  console.log(email)
  var data = {
    to_email:email,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    function (response) {
      console.log(response.status, response.text);
    },
    function (err) {
      console.log(err);
    }
  );
}

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

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
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

  function handleClick() {
   console.log(email)
   var data = {
     to_email:email,
   };

   emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
     function (response) {
       console.log(response.status, response.text);
     },
     function (err) {
       console.log(err);
     }
   );
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
      text: "Document"
      },
      {
      id: 2,
      fontSize: 40,
      avatarIcon: (<AssessmentIcon/>),
      text: "Analysis"
      },
      {
      id: 3,
      fontSize: 40,
      avatarIcon: (<FolderIcon/>),
      text: "Folders"
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
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
      };


  return (

    <Box sx={{ display: 'flex', }}   className={classes.boxBackground} >
      <CssBaseline />

      <AppBar2 position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">

          </Typography>
        </Toolbar>
      </AppBar2>


      <Drawer2 variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {icons.map((item, index) => (
                <ListItem button key={item}>
                    <ListItemIcon>{item.avatarIcon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    <Box sx={{ m: 6 }} />
                </ListItem>
            ))}
        </List>
      </Drawer2>

      <Box component="main"  className={classes.boxBackground2} sx={{ flexGrow: 1, p: 4 }}>

      <DrawerHeader />


        <Grid container spacing={8}>

        <Grid item xs={6} md={2}>
        </Grid>

        <Grid item xs={7} md={11}>
        TEST Risk Assessment Application to be reviewd
        </Grid>

        <Grid item xs={20} md={2}>


        </Grid>

        <Grid item xs={10} md={4}>
        <Box
          component="form"
          className={classes.boxBackground3}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="Name"
              defaultValue="Chris Petrulla"
              variant="standard"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue="chris.petrulla@dhsp.com"
              variant="standard"
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


          </div>

        </Box>
        </Grid>

        <Grid item xs={6} md={1}>
        </Grid>

        <Grid item xs={6} md={4}>
        <Box
          component="form"
          className={classes.boxBackground3}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <TextField
            required
            id="standard-required"
            label="Form"
            defaultValue="Risk Assessment"
            variant="standard"
          />

          <TextField
            required
            id="standard-required"
            label="Departement"
            defaultValue="Data Science Diabetes"
            variant="standard"
          />

          </div>

        </Box>
        </Grid>

        <Grid item xs={6} md={1}>
        </Grid>

        <Grid item xs={6} md={7}>
        </Grid>
        <Grid item xs={6} md={5}>

        <div className="AppEmail">
            <p>
              Enter your email here
              <button type="submit" onClick={handleClick}>
                Send mail
              </button>
            </p>
        </div>
        </Grid>


      </Grid>

    </Box>
        </Box>


  )
}

export default App;
