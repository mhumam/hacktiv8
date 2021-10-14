import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CustomTheme } from 'Theme';
import Header from 'components/Header';
import MovieCard from 'components/Movie';
import CardSkeleton from 'components/CardSkeleton';
import { DetailMovie } from 'components/Movie';
import { useFetch } from 'hooks';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '2rem'
}));

const App = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [movieId, setMovieId] = useState(null)
    const defaultSearch = 'man';

    /* for fetching data */
    const { data, isLoading, params, setParams } = useFetch(
        'https://www.omdbapi.com',
        { apiKey: '7acdd46', s: defaultSearch }
    )

    /* for handle on search in header */
    const handleOnSearch = (value) => {
        setParams({ ...params, s: value ? value : defaultSearch })
    }

    return (
        <ThemeProvider theme={CustomTheme}>
            <Header title="Movie Catalogue" setParams={handleOnSearch} />
            <Container maxWidth="xl">
                <Typography mt={4} mb={4} variant="h4" component="div" gutterBottom>
                    Show your favorite movies
                </Typography>
                <Grid container spacing={2}>
                    {
                        isLoading ? Array.from(new Array(8))?.map((_, key) => <Grid item xs={3} key={key}><CardSkeleton /></Grid>)
                            : data?.Search ? data?.Search?.map((obj, key) => {
                                return (
                                    <Grid item md={3} key={key}>
                                        <MovieCard title={obj?.Title} year={obj?.Year} image={obj?.Poster}
                                            onClick={() => {
                                                setShowDetail(true);
                                                setMovieId(obj?.imdbID)
                                            }} />
                                    </Grid>
                                )
                            }) : <Grid item xs={12}><Div>{"Movie Not Found"}</Div></Grid>
                    }
                </Grid>
            </Container>
            <DetailMovie open={showDetail} handleClose={() => setShowDetail(false)} movieId={movieId} />
        </ThemeProvider>
    );
}

export default App;
