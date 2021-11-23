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
})

function App() {

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
      id: 0,
      avatarIcon: (<HomeIcon/>),
      text: "Home"
      },
      {
      id: 1,
      avatarIcon: (<DescriptionIcon/>),
      text: "Document"
      },
      {
      id: 2,
      avatarIcon: (<AssessmentIcon/>),
      text: "Analysis"
      },
      {
      id: 3,
      avatarIcon: (<FolderIcon/>),
      text: "Folders"
      },
      ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      // Drawer

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
                  </ListItem>
              ))}
          </List>
      </Drawer2>


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
              <Typography
              className={classes.changeStyle}
              color="primary" >
              Fill in all the details to deploy the form
              </Typography>

              <TextField id="standard-basic" label="Name" variant="standard" />

              <TextField id="standard-basic" label="Email" variant="standard" />

              <TextField id="standard-basic" label="Departement" variant="standard" />

              <TextField id="standard-basic" label="Form" variant="standard" />




              <div>
                 <Button disabeled fullWidth color="primary" variant="contained">
                   Pirates of the Ryver
                 </Button>
               </div>

              <input type="text" />
              <TodoList todos = {todos} toggleTodo={toggleTodo}/>
              <input ref={todoNameRef} type="text" />
              <button onClick={handleAddTodo}> Add Todo </button>
              <button onClick={handleClearTodos}> Clear Complete </button>
              <div> {todos.filter(todo => !todo.complete).length} left to do</div>
      </Box>
    </Box>
  )
}

export default App;
