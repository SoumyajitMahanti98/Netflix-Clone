import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* // navbar // */}
      <Nav />

      {/* // banner // */}
      <Banner />
      {/* <Row title="NETFLIX ORIGINALS " fetchUrl={requests.GetTopRated} />
      <Row title="Trending Now " fetchUrl={requests.GetNowPlaying} />
      <Row title="Trending Now " fetchUrl={requests.GetPopular} /> */}
      {/* <Row title="Top Rated Movies " fetchUrl={requests.fetchTopRated} /> */}
      {/* <Row title="Top Action Movies " fetchUrl={requests.fetchTopActionMovies} /> */}
      {/* <Row title="Top Comedy Movies " fetchUrl={requests.fetchTopComedyMovies} /> */}
      {/* <Row title="Trending Now " fetchUrl={requests.GetUpcoming} />
      <Row title="Trending Now " fetchUrl={requests.GetLatest}/> */}
      {/* <Row title="NETFLIX ORIGINALS " fetchUrl={requests.GetLatest} /> */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.GetNowPlaying} isLargeRow={true} />
      <Row title="Top Action Movies" fetchUrl={requests.GetTopRated} isLargeRow={true} />
      <Row title="Top Rated Movies" fetchUrl={requests.GetPopular} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.GetUpcoming} isLargeRow={true} />

    </div>
  );
}
export default App;




