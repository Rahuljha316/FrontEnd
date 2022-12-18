import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
// import { Home } from '@mui/icons-material';
import Home from './components/home'
import Login from './components/loginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
