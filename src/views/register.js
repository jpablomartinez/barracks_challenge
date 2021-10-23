import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, TextField, Avatar } from '@mui/material';
import logo from '../img/logo.png'
const theme = createTheme();

export default function Register(){

    return (
        <ThemeProvider theme = {theme}>
            <Container component = 'main' maxWidth = 'xs'>
                <CssBaseline/>
                <Box sx = {{mt: 8, display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar sx = {{height: '15vmin', width: '15vmin', mb: 5}}>
                        <img src={logo}  alt="logo" style = {{height: '15vmin'}}/>
                    </Avatar>
                    <Typography component="h1" variant="h4" sx = {{color: '#fff'}}>
                        Create your account
                    </Typography>
                    <Box component = 'form' sx = {{mt: 3}}>
                        <Grid container spacing = {2}>
                            <Grid item xs = {12} sm = {6}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='name'
                                    label='First name'
                                    name='name'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='lastname'
                                    label='Last name'
                                    name='lastname'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Your email account'
                                    name='email'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='password'
                                    label='Password'
                                    name='password'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                            <Grid item xs = {12}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='password'
                                    label='Repeat password'
                                    name='password'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Button
                        type = 'submit'
                        fullWidth
                        variant = 'contained'
                        sx= {{mt:3, mb: 2, backgroundColor: '#646af6', borderRadius: '50px', height: '50px'}}
                    >
                        Create account
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    )

}
