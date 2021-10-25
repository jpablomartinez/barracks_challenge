import * as React from 'react';
import  Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { getUserData } from '../utils/token';
import {MASK, EpI, EpII, EpIII, EpIV, EpV, EpVI, STI, STII, LIAR, ACE, BB2, I1, I2, MM, DRACULA, H, GWH, SS, F, FVSJ} from '../utils/posters';
import Movie from '../components/movie';


export default function Home(){

    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        const userData = getUserData(); 
        setUsername(userData.firstname);                                          
    }, []);

    return (
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
    )

}