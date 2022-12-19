import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
// import { Home } from '@mui/icons-material';
import Home from './components/home'
import Login from './components/loginPage';
import RegisterPage from './components/registerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
