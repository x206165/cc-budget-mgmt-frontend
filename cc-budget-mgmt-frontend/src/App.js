import { Route, Routes, Navigate } from 'react-router-dom';
//views
//import Dashboard from './views/Dashboard/Dasboard';
import LoginFormik from './views/LoginFormik';
import LogOutPage from './views/LoginSignIn/LogOutPage';
import History from './views/History';
import HomePage from './views/Home/HomePage';
import AccountList from './views/Account/AccountList';
//components
import Navbar from './components/Navbar/Navbar';

function App() {

  return (<>
  <Navbar/>
  <Routes>
    <Route path='/' element={<LogOutPage/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/accountlist' element={<AccountList/>}/>
    <Route path='/login' element={<LoginFormik/>}/>
    <Route path='/logout' element={<LogOutPage/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
    <Route path='*' element={<Navigate to='/'/>}/>
  </Routes>
  </>
  );

}

export default App;
