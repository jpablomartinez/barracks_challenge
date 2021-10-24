import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline, Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import { getToken, getUserData, logout } from '../utils/token';
import logo from '../img/logo.png'
import {MASK, EpI, EpII, EpIII, EpIV, EpV, EpVI, STI, STII, LIAR, ACE, BB2, I1, I2, MM, DRACULA, H, GWH, SS, F, FVSJ} from '../utils/posters';
import Movie from '../components/movie';
import axios from 'axios';

const theme = createTheme();


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1B1E29'
}));


export default function Home(){

    const [username, setUsername] = React.useState('');
    const [admin, setAdmin] = React.useState(false);

    React.useEffect(() => {
        const userData = getUserData(); 
        if(userData.user_type === 0) setAdmin(true);
        console.log(userData.user_type);
        setUsername(userData.firstname);                                          
    }, []);

    const handleLogout = () => {             
        axios.post('http://localhost:12001/logout', {token: getToken()})
        .then((r) => {
            logout();
        })
    }

    const handleRoute = () => {
        window.location.href = '/admin';
    }

    return (
        <ThemeProvider theme = {theme}>
            <Box sx = {{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position = 'absolute' open = {true}>
                    <Toolbar>
                        <Avatar sx = {{height: '5vmin', width: '5vmin', mr: 2}}>
                            <img src={logo}  alt="logo" style = {{height: '5vmin'}}/>
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >                        
                            BBStream
                        </Typography>
                        {admin ? 
                            <Button variant = 'contained' color = 'secondary' onSubmit={handleRoute} sx = {{mr: 2}}>
                                Admin
                            </Button>
                            :
                            <div></div>                   
                        }
                        <IconButton color="inherit" onClick={handleLogout}>
                            <ExitToAppIcon />
                        </IconButton>                   
                    </Toolbar>
                </AppBar>
                
                <Container sx = {{mt: 12, mb: 4}}>
                    <Typography component="h1" variant="h5" sx = {{color: '#ababab'}}>
                        Welcome, {username}
                    </Typography>
                    <Grid container spacing = {2} sx = {{mb: 2, mt: 2}}>
                        <Movie movie = {EpI}/>
                        <Movie movie = {EpII}/>
                        <Movie movie = {EpIII}/>
                        <Movie movie = {EpIV}/>
                        <Movie movie = {EpV}/>
                        <Movie movie = {EpVI}/>
                    </Grid>
                    <Grid container  spacing = {2} sx = {{mb: 2}}>
                        <Movie movie = {STI}/>
                        <Movie movie = {STII}/>
                        <Movie movie = {BB2}/>
                        <Movie movie = {I1}/>
                        <Movie movie = {I2}/>
                        <Movie movie = {DRACULA}/>
                    </Grid>
                    <Grid container  spacing = {2} sx = {{mb: 2}}>
                        <Movie movie = {F}/>
                        <Movie movie = {FVSJ}/>
                        <Movie movie = {SS}/>
                        <Movie movie = {ACE}/>
                        <Movie movie = {LIAR}/>
                        <Movie movie = {MASK}/>
                    </Grid>
                    <Grid container  spacing = {2} sx = {{mb: 2}}>
                        <Movie movie = {MM}/>
                        <Movie movie = {H}/>
                        <Movie movie = {GWH}/>                        
                    </Grid>
                </Container>

            </Box>
        </ThemeProvider>
    )

}