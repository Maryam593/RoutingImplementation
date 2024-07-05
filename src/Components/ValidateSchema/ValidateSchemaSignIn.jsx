import * as yup from 'yup'

const SIgnInSchema = yup.object({
    email: yup.string(),
    password : yup.string()
})