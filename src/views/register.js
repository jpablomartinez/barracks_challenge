import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, TextField, Avatar } from '@mui/material';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import logo from '../img/logo.png'
const theme = createTheme();

export default function Register(){

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('success');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const handleMessage = (msg, color) => {
        setMessage(msg);
        setColor(color);
    }

    const handleSubmit2 = (event) => {        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:12001/register', {
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            password: data.get('password')
        }).then(res => {
            if(res.data.data === 100){
                //show succesful snackbar
                //this.setState({message: 'Congrats! user was created'});
                handleMessage('Congrats! user was created', 'success');
                setOpen(true);          
            }
            else if(res.data.data === 101){
                handleMessage('user already exists', 'info');
                setOpen(true);
            }
            else {                
                handleMessage('an error ocurred. Try again', 'error');
                setOpen(true);        
            }
        })
    }

    return (
        <ThemeProvider theme = {theme}>
            <Container component = 'main' maxWidth = 'xs'>
                <CssBaseline/>
                <Box sx = {{mt: 8, display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
                        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                            {message}
                        </Alert>
                    </Snackbar>
                    <Avatar sx = {{height: '15vmin', width: '15vmin', mb: 5}}>
                        <img src={logo}  alt="logo" style = {{height: '15vmin'}}/>
                    </Avatar>
                    <Typography component="h1" variant="h4" sx = {{color: '#fff'}}>
                        Create your account
                    </Typography>
                    <Box component = 'form' noValidate  onSubmit={handleSubmit2} sx = {{mt: 3}}>
                        <Grid container spacing = {2}>
                            <Grid item xs = {12} sm = {6}>
                                <TextField
                                    margin = 'normal'
                                    variant = 'outlined'
                                    required
                                    fullWidth
                                    id='firstname'
                                    label='First name'
                                    name='firstname'
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
                                    id='password1'
                                    label='Confirm password'
                                    name='password1'
                                    autoFocus
                                    sx = {{backgroundColor: '#ffffff', borderRadius: '50px'}}
                                />
                            </Grid>
                            <Button
                                type = 'submit'
                                fullWidth
                                variant = 'contained'
                                sx= {{mt:3, mb: 2, backgroundColor: '#646af6', borderRadius: '50px', height: '50px'}}
                            >
                                Create account
                            </Button>
                        </Grid>
                    </Box>
                   
                </Box>
            </Container>
        </ThemeProvider>
    )

}
