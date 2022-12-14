import React, {useEffect}  from 'react'
import { Formik } from "formik";
import {logInAsync} from "../store/authSlice"
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useLocation } from 'react-router-dom';

const LoginFormik = () => {

  const navigate = useNavigate(); 
  const redirectLogin = ()=>{
    navigate('/login')
  }

  const redirectHome = ()=>{
    navigate('/homepage')
  }

  const dispatch = useDispatch();  
  const {isAuth, usuario} = useSelector(state => state.auth )
  useEffect(() => {
    if(isAuth) {
      console.log("LOGEADO = " + usuario);
    }
   }, [isAuth] )

  return (
    <Formik
      initialValues={{
        usuario: '',
        password: ''
        
      }}
      validate={(values) => {
        let errors = {};
        if (!values.usuario) {
          console.log('USUARIO LOG = '  + values.usuario); 
          errors.usuario = 'debe proveer un usuario.'
        } else if (values.usuario.length < 5) {
          errors.usuario = 'usuario debe tener al menos 5 caracteres.';
        } else if (values.usuario.length > 20){
          errors.usuario = 'usuario solo puede tener hasta 20 caracteres.';
        }

        if (!values.password) {
          console.log('PASSWORD LOG = '  + values.usuario); 
          errors.usuario = 'debe proveer un password.'
        } 

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        console.log('USUARIO LOG on Submit = '  + values.usuario + ' | PASSWORD LOG on Submit = '  + values.password); 
        resetForm();
        
        dispatch(logInAsync(values)); 
        redirectHome(); 

        setTimeout(()=>{
          setSubmitting(false);
        },3000);
      }}>
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        isSubmitting,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Usuario: </label>
          <input type='text' name='usuario' value={values.usuario} onChange={handleChange} onBlur={handleBlur}/>
          {touched.usuario && errors.usuario&&<p>{errors.usuario}</p>}
          <br/> 
          <label>Clave: </label>
          <input type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          {touched.password && errors.password&&<p>{errors.password}</p>}
          <br/> 
          <button type="submit" disabled={isSubmitting}>ENVIAR</button>
        </form>
      )}
    </Formik>
  )
}

export default LoginFormik;
