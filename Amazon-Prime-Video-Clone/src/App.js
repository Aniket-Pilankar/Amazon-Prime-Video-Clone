import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar';
import TvShows from './Components/TvShows/TvShows';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      
      {/* <TvShows/> */}
    </div>
  );
}

export default App;
