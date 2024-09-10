import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Favourites from './components/Favourites/Favourites';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
