import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
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
import Stack from '@mui/material/Stack';


import "./style.css";
import pirates_logo from './pirates_logo.png';
import './App.css';
import {Button, Typography} from '@material-ui/core';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";
import {BACKEND_URL} from "./constants";

const SERVICE_ID = "service_cgboddf";
const TEMPLATE_ID = "template_7vfo4ds";
const USER_ID = "user_f3CQB1im3popVTlDE3kA3";


const ContactUs = () => {

    const [name, setName] = useState('Simona');
    const [email, setEmail] = useState('simona.santamaria1@gmail.com');

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


    const [dataset, setCurrency] = React.useState('Chest-X-ray-images');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };


    const datasets = [
        {
            value: 'Chest-X-ray-images',
            label: 'Chest-X-ray-images',
        },
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        // POST request to send payload to BAck-End
        axios.post(`https://cooper-b.herokuapp.com/api/v1/print-variables/`, {
            "name": name,
            "email": email
        })
            .then(res => {
                // console.log(res);
                if (res.status === 200) {
                    console.log(res.data.response);
                }

            })
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: email,
            to_name: name,
        }, USER_ID);
    };

    return (

        <form>
            <div>

                <Stack
                    component="form"
                    sx={{
                        width: '40ch',
                    }}
                    spacing={6}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        required
                        id="user_name"
                        label="Name"
                        defaultValue="Simona"
                        variant="standard"
                        name="user_name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

                    <TextField
                        required
                        id="user_email"
                        label="Email ID"
                        defaultValue="simona.santamaria1@gmail.com"
                        variant="standard"
                        name="user_email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Dataset"
                        value={dataset}
                        onChange={handleChange}
                    >
                        {datasets.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        required
                        id="dep"
                        label="Departement"
                        defaultValue="Human Resources"
                        variant="standard"
                        name="dep"
                    />


                    <Button variant="contained" onClick={(e) => sendEmail(e)} color="primary" class="Center">Data
                        Anonymisation</Button>

                </Stack>
            </div>
        </form>


    );
};

export default ContactUs;
