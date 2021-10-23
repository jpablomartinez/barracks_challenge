import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, CssBaseline, TextField } from '@mui/material';

import logo from '../img/logo.png'

const theme = createTheme();

export default function Login() {
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
                            <Box component = 'form' sx = {{mt: 1}}>
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
                                        <Link href = '#' variant = 'body2'>
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
