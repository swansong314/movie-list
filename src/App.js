import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(0);
  const getMovies = async (inputYear) => {
    const url =
      `https://jsonmock.hackerrank.com/api/movies/search/?Year=` +
      `${inputYear}`;
    const response = await fetch(url);
    const list = await response.json();
    console.log(list);
    setMovies(list.data);
  };

  return (
    <div>
      <form>
        <input
          type='number'
          id='year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </form>
      <button onClick={() => getMovies(year)}>Search</button>
      <ul>
        {movies.map((movie) => {
          return <li>{movie.Title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
