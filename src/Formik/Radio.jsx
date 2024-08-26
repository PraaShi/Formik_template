import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Radio(props) {
  const {name , label , options,...rest} = props
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({field}) => {
          return options.map(option => {
            return(
            <div key={option.value}>
              <input 
                type='radio' 
                id={option.value}
                {...field}
                value={option.value} 
                checked={option.value === field.value} 
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
            )
        })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Radio