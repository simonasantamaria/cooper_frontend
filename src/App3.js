import React, {useState,useRef, useEffect} from 'react';
import "./style.css";
import pirates_logo from './pirates_logo.png';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

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
import AppBar from  '@material-ui/core/AppBar';
import Drawer from  '@material-ui/core/Drawer';



const LOCAL_STORAGE_KEY = 'todoApp.todos'
const drawerWidth = 50;


const useStyles = makeStyles({
  changeStyle: {
    fontStyle: "oblique",
    color: "blue",
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
  return (
    < >
      <div>
      <Drawer
        variant="persistent"
        anchor="left"
        width= "drawerWidth"
        open={true}
        classes={{
          paper: classes.drawer,
        }}>
        // Drawer content...
      </Drawer>
      </div>


      <Typography
      className={classes.changeStyle}
      color="primary" >
      Fill in all the details to deploy the form
      </Typography>

      <Typography color="primary"> Name </Typography>

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
    </>
  )
}

export default App;
