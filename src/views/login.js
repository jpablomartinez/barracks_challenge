import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, CssBaseline, TextField } from '@mui/material';
import axios from 'axios';
import {setToken} from '../utils/token';
import logo from '../img/logo.png'

const theme = createTheme();

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:12001/login', {email: data.get('email'),password: data.get('password')})
        .then(res => {
            if(res.data.data === 101 || res.data.data === 100){
                setToken(res.data.data.token);
                //props.history.push('/');
            }
        });
    }

    return (
        <ThemeProvider theme = {theme}>
            <Container component = 'main' maxWidth = 'sm'>
                <CssBaseline/>
                <Box sx = {{marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar sx = {{height: '15vmin', width: '15vmin'}}>
                        <img src={logo}  alt="logo" style = {{height: '15vmin'}}/>
                    </Avatar>  
                    <Grid container spacing = {2} justifyContent='center' alignItems='center'>
                        <Grid item xs = {8}>
                            <Box component = 'form' onSubmit= {handleSubmit} sx = {{mt: 1}}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Your email address'
                                    name='email'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required 
                                    fullWidth
                                    id='password'
                                    label='Password'
                                    type='password'
                                    name='password'
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                                <Button
                                    type = 'submit'
                                    fullWidth
                                    variant = 'contained'
                                    sx= {{mt:3, mb: 2, backgroundColor: '#646af6', borderRadius: '50px', height: '50px'}}
                                >
                                    Sign In
                                </Button>
                                <Grid container justifyContent='center' alignItems='center'>
                                    <Grid item>
                                        <Link href = '/register' variant = 'body2'>
                                            {"Don't have an account? Sign Up!"}
                                        </Link>
                                    </Grid>
                                </Grid>                                                       
                            </Box>
                        </Grid>
                    </Grid>   
                </Box>
            </Container>
        </ThemeProvider>
    )
}
