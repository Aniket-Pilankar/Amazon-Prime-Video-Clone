import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage/HomePage';
// import Navbar from './Components/Navbar';
import {Navbar} from './Components/Navbar1/navbar';
import TvShows from './Components/TvShows/TvShows';
import { Navbarfirst } from './Components/Navbar/Navbarfirst';
import { Card } from './Components/cardpage/card'
import { MovieDetails } from './Components/MovieDetailsPage/MovieDetails';
import { Firsthome } from './Components/Landing Home Page/Firsthome'
import SignIn from './Components/ajit/SignIn'
import SignUp from './Components/ajit/SignUp'
import { Address } from './Components/addressPage/addresspage';
import { Landing } from './Components/Landing/landing';
import { NavbarForLanding } from './Components/navforLanding/navforlanding';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<><NavbarForLanding/><Landing/></>}/>
        <Route path='/signIn' element={<><SignIn/></>}/>
        <Route path='/signUp' element={<><SignUp/></>}/>
        <Route path='/homepage' element={<><Navbar/><HomePage/></>}/>
        <Route path='/paymentCardPage' element={<><Card/></>} />
        <Route path='/movieDetails/:imdbID' element={<><Navbar/><MovieDetails/></>}/>
        <Route path='/addressPage' element={<><Address/></>}/>
      </Routes>
      

    </div>
  );
}

export default App;
