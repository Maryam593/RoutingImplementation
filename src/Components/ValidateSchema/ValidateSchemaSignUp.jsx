import React from 'react'
//select all from yup
import * as yup from 'yup'

const SignUpSchema = yup.object({
    name : yup.string().min(5).max(25).required(),
    phoneNo: yup.number().min(10).max(12).required(),
    email:yup.string().email().required(),
    password: yup.string().min(5).max(20).required().matches(/^[0-9a-zA-Z]+$/, 'Password can only contain letters and numbers'),
    confirm_password: yup.string().min(5).max(20).required().oneOf([yup.ref('password'),null],"Password must match"),
})
export default SignUpSchema
