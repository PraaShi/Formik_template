import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Input(props) {
  const {name , label , ...rest} = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input