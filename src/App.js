import logo from './logo.svg';
import './App.css';
import { Nav } from './pages-page/Nav';
import { AiFillAliwangwang } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHandler from './pages-page/AppHandler';
import NotFound from './pages-page/NotFound';

import InitialReset from './pages-page/InitialReset';
import ResetFailed from './pages-page/ResetFailed';
import ResetSuccess from './pages-page/ResetSuccess';

function App() {
  return (<>
   <BrowserRouter>
    <Routes>
      <Route path='/' Component={AppHandler} />
      <Route path='/initial_reset' Component={InitialReset} />
      <Route path='/success' Component={ResetSuccess} />
      <Route path='/failed' Component={ResetFailed} />
      <Route path='*' Component={NotFound} />
    </Routes>
   </BrowserRouter>
  </>);
}

export default App;
