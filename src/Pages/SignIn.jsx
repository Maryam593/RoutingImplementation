import { useFormik } from 'formik'
import React from 'react'
const initialValues = {
  email : "",
  password : ""
}

const SignIn = () => {
    const {values,handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
      initialValues:initialValues,
      onSubmit: (values,action) => {
      console.log("Form submitted : ", values)
      action.resetForm()
      }
    })
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email"  value={values.email} onChange={handleChange} />
        <input type="password" name="password"  value={values.password} onChange={handleChange} />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  )
}

export default SignIn
