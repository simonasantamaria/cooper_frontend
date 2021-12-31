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

const drawerWidth = 240;


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const LOCAL_STORAGE_KEY = 'todoApp.todos'


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

const AppBar = styled(MuiAppBar, {
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
    backgroundColor: '#9e9e9e',
    background: "#9e9e9e",
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
  backgroundColor: "#1a237e",
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
      ];

const [dataset, setCurrency] = React.useState('chest');
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
      };


  return (


        <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex' }}>
   <CssBaseline />
   <AppBar
     position="fixed"
     sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
   >
     <Toolbar>
       <Typography variant="h6" noWrap component="div">
         Permanent drawer
       </Typography>
     </Toolbar>
   </AppBar>
   <Drawer
   classes={{ paper: classes.paper}}
     sx={{
       backgroundColor: "#1a237e",
       color:"#1a237e",
       width: drawerWidth,
       flexShrink: 0,
       '& .MuiDrawer-paper': {
         width: drawerWidth,
         boxSizing: 'border-box',
       },
     }}
     variant="permanent"
     anchor="left"
   >
     <Toolbar />
     <Divider />
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
   </Drawer>
   <Box
     component="main"
     sx={{ flexGrow: 1, bgcolor: 'inherit', p: 3 }}
   >
     <Toolbar />


    <Box  sx={{
            backgroundColor: '#eeeeee'
      }}>


     <Box  sx={{
       backgroundColor: '#9e9e9e',
       '&:hover': {
         backgroundColor: 'primary.main',
         opacity: [0.9, 0.8, 0.7],
       },
     }}>


     <Grid
       container
       direction="row"
       justifyContent="space-evenly"
       alignItems="center"
     >
      <Grid item> Form </Grid>
      <Grid item> ID Demo </Grid>
      <Grid item> Hans Muster</Grid>
    </Grid>

       </Box>

     <ContactUs />
   </Box>
   </Box>
 </Box>

      <AppBar position="fixed" open={open}>
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
      </AppBar>


      <Box component="main"  className={classes.boxBackground2} sx={{ flexGrow: 1, p: 4 }}>

      <DrawerHeader />


    </Box>

      </ThemeProvider>

  )
}

export default App;
