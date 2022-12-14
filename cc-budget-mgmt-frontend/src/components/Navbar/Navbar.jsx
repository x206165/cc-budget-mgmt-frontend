import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './../../store/authSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); 
  const redirectLogin = ()=>{
    navigate('/login')
  }
  const redirectLogOut = ()=>{
    navigate('/logout')
  }

  const dispatch = useDispatch();

  const { isAuth } = useSelector(state => state.auth);
  const login = ()=>{
    dispatch(logIn({ username:'leonardo', email:'hola@gmail.com' }));
    console.log("Navbar login");
    redirectLogin(); 
  };
  const out = ()=>{
    dispatch(logOut());
    console.log("Navbar logout");
    redirectLogOut(); 
  };

  // secondary buttons nav bar

  const history = ()=>{
    console.log("Navbar history");
    navigate('/history');
  }

  const account = ()=>{
    console.log("Navbar account list");
    navigate('/accountlist');
  }

  return (
    <div>
      {isAuth ?
      <button onClick={out}>Log Out</button> :
      <button onClick={login}>Login</button>}
      {isAuth ?
      <button onClick={history}>History</button> : <></>
      }
      {isAuth ?
      <button onClick={account}>Accounts</button> : <></>
      }
    </div>
  )
}

export default Navbar