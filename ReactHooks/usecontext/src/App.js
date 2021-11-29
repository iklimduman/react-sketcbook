
import './App.css';

import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Navbar from './Navbar';

function App() {
  return (

    <div className="App">
      <MovieProvider>
        <Navbar />
        <MovieList />
      </MovieProvider>
    </div>

  );
}

export default App;
