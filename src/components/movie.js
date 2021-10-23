import * as React from 'react';
import  Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const theme = createTheme();

const useStyles = makeStyles({
    click: {
        '&:hover': {
            transform: 'scale(1.05)',
            transitionDuration: '0.5s',
            cursor: 'pointer'      
        }
    }
});

export default function Movie(props){
    const classes = useStyles();
    return(
        <ThemeProvider theme = {theme}>
            <Grid item xs = {6} md = {2} lg = {2}>
                <Paper sx = {{p:1, display: 'flex', flexDirection: 'column', height: 250, backgroundColor: '#1B1E29'}}>
                    <img src= {props.movie}  alt="logo" style = {{height: '25vmin', width: '100%'}} className = {classes.click}/>
                </Paper>
            </Grid>
        </ThemeProvider>
   )

}