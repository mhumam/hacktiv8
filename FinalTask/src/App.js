import Header from 'components/Header';
import MovieCard from 'components/Movie';
import { useFetch } from 'hooks';
import './App.css';
import './assets/styles/style.css';
import './assets/styles/responsive.css';

function App() {
    const { data, params, setParams } = useFetch(
        'https://www.omdbapi.com',
        { apiKey: '65525897', s: 'man' }
    )

    const handleOnSearch = (value) => {
        setParams({ ...params, s: value })
    }

    return (
        <>
            <Header onSearch={handleOnSearch} />
            <main id="mainContent">
                <div className="content">
                    <h2 className="content__heading">Show your favorite movies</h2>
                    <div id="movies" className="movies">
                        {
                            data?.Search?.map(obj => {
                                return <MovieCard title={obj?.Title} year={obj?.Year} image={obj?.Poster} />
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
