import React from "react";
import {  useFormik } from "formik";
import SignUpSchema from "../Components/ValidateSchema/ValidateSchemaSignUp";
const initialValues = {
  //it must be same -> form : name ->this will put here in intial values thats why it must be same in order to retrieve data 
  firstName : "",
  surName : "",
  email : "",
  password : "",
  confirm_password : ""
}
const SignUp = () => {
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
       initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log("Form submitted:", values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="number"
          name="phoneNo"
          id="phoneNo"
          value={values.phoneNo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your contact number "
        />
        <input
          type="email"
          name="email"
          id=""
          value={values.email}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          placeholder="Enter your password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="password"
          name="confirm_password"
          id="onfirm_password"
          value={values.confirm_password}
          placeholder="Confirm Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
