import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { CssBaseline, Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Paper from '@mui/material/Paper';
import logo from '../img/logo.png'
import axios from 'axios';
import { getToken } from '../utils/token';
const theme = createTheme();

const useStyles = makeStyles({
    root: {
      '& .super-app-theme--header': {
        backgroundColor: '#646af6',
      },
    },
  });


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1B1E29'
}));


const columns = [
    {field: 'id', headerName: 'ID', width: 100, headerClassName: 'super-app-theme--header',},    
    {field: 'name', headerName: 'Name', width: 250, headerClassName: 'super-app-theme--header',},    
    {field: 'email', headerName: 'Email', width: 200, headerClassName: 'super-app-theme--header',},
    {field: 'connection', headerName: 'Last Connection', width: 220, headerClassName: 'super-app-theme--header',},
    {field: 'device', headerName: 'Device', width: 120, headerClassName: 'super-app-theme--header',},
];

export default function Home(){

    const [users, setUsersData] = React.useState([]);

    React.useEffect(() => {
        const token = getToken();
        axios.get('http://localhost:12001/getUsers',
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        .then(r => {                       
            if(r.data.data === 100){                
                setUsersData(r.data.users);
            } 
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

    const classes = useStyles();

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
                        <IconButton color="inherit">
                            <ExitToAppIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container maxWidth = 'lg' sx = {{mt: 20, mb: 4}}>
                    <Grid container>
                        <Grid item xs = {12} md = {8} lg = {10}>
                            <Paper sx = {{p:2, display: 'flex', flexDirection: 'column', height: 450}}>
                                <div style = {{height: 400, width: '97%'}} className={classes.root}>
                                    <DataGrid rows = {users} columns = {columns} pageSize = {5} rowsPerPageOptions = {[5]}/>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )

}