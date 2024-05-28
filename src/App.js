import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
    <div className=''>

      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/auth' element={<Auth></Auth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
