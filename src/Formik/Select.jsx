import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Select(props) {
  const {name , label , dropdownoptions,...rest} = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {
            dropdownoptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.key}
                </option>
            )) 
        }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select