import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function CheckBox(props) {
    const {name ,label ,options,...rest} = props
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest} >
            {({field}) => {
                return options.map(option => (
                    <div key={option.value}>
                        <input 
                            type='checkbox'
                            id={option.value}
                            {...field}
                            value = {option.value}
                            checked={field.value.includes(option.value)}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                    </div>
                ))
            }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckBox