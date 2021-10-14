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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center'
}));

function App() {
    const defaultSearch = 'man';

    const { data, isLoading, params, setParams } = useFetch(
        'https://www.omdbapi.com',
        { apiKey: '65525897', s: defaultSearch }
    )

    const handleOnSearch = (value) => {
        setParams({ ...params, s: value ? value : defaultSearch })
    }

    return (
        <>
            <Header setParams={handleOnSearch} />
            <main id="mainContent">
                <Container maxWidth="xl">
                    <Typography mt={2} mb={2} variant="h4" component="div" gutterBottom>
                        Show your favorite movies
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            isLoading ? Array.from(new Array(5))?.map(() => <Grid item xs={3}><CardSkeleton /></Grid>)
                                : data?.Search ? data?.Search?.map(obj => {
                                    return (
                                        <Grid item xs={3}>
                                            <MovieCard title={obj?.Title} year={obj?.Year} image={obj?.Poster} />
                                        </Grid>
                                    )
                                }) : <Grid item xs={12}><Div>{"Data Not Found"}</Div></Grid>
                        }
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default App;
