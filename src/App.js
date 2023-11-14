
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rows title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
      <Rows title = "Trending Now" fetchUrl = {requests.fetchTrending} />
      <Rows title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Rows title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
