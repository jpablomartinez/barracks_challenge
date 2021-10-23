import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
    {field: 'username', headerName: 'Username', width: 150, headerClassName: 'super-app-theme--header',},
    {field: 'firstname', headerName: 'First Name', width: 150, headerClassName: 'super-app-theme--header',},
    {field: 'lastname', headerName: 'Last Name', width: 150, headerClassName: 'super-app-theme--header',},
    {field: 'email', headerName: 'Email', width: 250, headerClassName: 'super-app-theme--header',},
    {field: 'lastConnection', headerName: 'Last Connection', width: 220, headerClassName: 'super-app-theme--header',},
    {field: 'device', headerName: 'Device', width: 120, headerClassName: 'super-app-theme--header',},
];

const rows = [
    {id:1, username: 'Krod', firstname: 'Juanpablo', lastname: 'Martínez Colombo', email: 'jp.martinez.colombo@gmail.com', lastConnection: '23/10/2021 00:00:00', device: 'Desktop'},
    {id:2, username: 'Dani', firstname: 'Daniela', lastname: 'Martínez Colombo', email: 'dani@gmail.com', lastConnection: '20/10/2021 00:00:00', device: 'Mobile'},
    {id:3, username: 'Samy', firstname: 'Samantha', lastname: 'Martínez Colombo', email: 'samy@gmail.com', lastConnection: '22/10/2021 00:00:00', device: 'Desktop'},
    {id:4, username: 'Amanda', firstname: 'Amanda', lastname: 'Martínez Colombo', email: 'amanda@gmail.com', lastConnection: '19/10/2021 00:00:00', device: 'Desktop'},

];

export default function Home(){
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
                        <Grid item xs = {12} md = {8} lg = {12}>
                            <Paper sx = {{p:2, display: 'flex', flexDirection: 'column', height: 450}}>
                                <div style = {{height: 400, width: '100%'}} className={classes.root}>
                                    <DataGrid rows = {rows} columns = {columns} pageSize = {5} rowsPerPageOptions = {[5]}/>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )

}