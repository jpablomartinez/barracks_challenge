import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { getToken} from '../utils/token';

const useStyles = makeStyles({
    root: {
      '& .super-app-theme--header': {
        backgroundColor: '#646af6',
      },
    },
  });

const columns = [
    {field: 'id', headerName: 'ID', width: 100, headerClassName: 'super-app-theme--header',},    
    {field: 'name', headerName: 'Name', width: 250, headerClassName: 'super-app-theme--header',},    
    {field: 'email', headerName: 'Email', width: 200, headerClassName: 'super-app-theme--header',},
    {field: 'connection', headerName: 'Last Connection', width: 220, headerClassName: 'super-app-theme--header',},
    {field: 'device', headerName: 'Device', width: 120, headerClassName: 'super-app-theme--header',},
];

export default function Admin(){

    const [users, setUsersData] = React.useState([]);

    React.useEffect(() => {
        const token = getToken();     
        axios.get('https://api.devmenestrello.com/getUsers',
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
    )

}