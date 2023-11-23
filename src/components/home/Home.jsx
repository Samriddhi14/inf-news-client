import { Grid } from '@mui/material';
import Banner from '../banner/Banner';
import Categories from './Categories';
import NewsApp from "./News"; // Adjust the path based on your project structure

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container spacing={2}>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid item lg={8} xs={10} sm={8}>
                    <NewsApp />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
