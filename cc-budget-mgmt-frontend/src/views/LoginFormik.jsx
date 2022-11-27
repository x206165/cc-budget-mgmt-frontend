import React from 'react'
import { Formik } from "formik";

const LoginFormik = () => {
  return (
    <Formik
      initialValues={{
        usuario: '',
        password: ''
        
      }}
      validate={(values) => {
        let errors = {};
        if (!values.usuario) {
          errors.usuario = 'debe proveer un usuario.'
        } else if (values.usuario.length < 5) {
          errors.usuario = 'usuario debe tener al menos 5 caracteres.';
        } else if (values.usuario.length > 20){
          errors.usuario = 'usuario solo puede tener hasta 20 caracteres.';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm();
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
          <label>Usuario:</label>
          <input type='text' name='usuario' value={values.usuario} onChange={handleChange} onBlur={handleBlur}/>
          {touched.usuario && errors.usuario&&<p>{errors.usuario}</p>}
          <button type="submit" disabled={isSubmitting}>ENVIAR</button>
        </form>
      )}
    </Formik>
  )
}

export default LoginFormik;
