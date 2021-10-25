import * as React from 'react';
import Box from '@mui/material/Box';
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
import axios from 'axios';
import Rutas from '../routes/routes';

const theme = createTheme();

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1B1E29'
}));

export default function Layout(props){

    const [admin, setAdmin] = React.useState(false);

    React.useEffect(() => {
        const userData = getUserData(); 
        if(userData.user_type === 0) setAdmin(true);                                 
    }, []);

    const handleLogout = () => {             
        axios.post('https://api.devmenestrello.com/logout', {token: getToken()})
        .then((r) => {
            logout();
        })
    }

    const handleRoute = () => {
        window.location.href = '/admin'       
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
                            <Button variant = 'contained' color = 'secondary' onClick={handleRoute} sx = {{mr: 2}}>
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
                <Rutas/>
            </Box>
        </ThemeProvider>

    )

}
