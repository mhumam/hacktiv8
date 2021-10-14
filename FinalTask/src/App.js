import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from 'Theme';
import Header from 'components/Header';
import MovieCard from 'components/Movie';
import CardSkeleton from 'components/CardSkeleton';
import { useFetch } from 'hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '2rem'
}));

function App() {
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
                        isLoading ? Array.from(new Array(8))?.map(() => <Grid item xs={3}><CardSkeleton /></Grid>)
                            : data?.Search ? data?.Search?.map(obj => {
                                return (
                                    <Grid item md={3}>
                                        <MovieCard title={obj?.Title} year={obj?.Year} image={obj?.Poster} />
                                    </Grid>
                                )
                            }) : <Grid item xs={12}><Div>{"Movie Not Found"}</Div></Grid>
                    }
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
