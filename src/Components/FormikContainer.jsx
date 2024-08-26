import React from 'react'
import { Formik , Form  } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Formik/FormikControl'
import CheckBox from '../Formik/CheckBox'

function FormikContainer() {

    const dropdownoptions =[
        {key:'Select An Option' , value:''},
        {key:'Option 1' , value:'option1'},
        {key:'Option 2' , value:'option2'},
        {key:'Option 3' , value:'option3'},
    ]

    const radiooptions =[
        // {key:'Choose' , value:''},
        {key:'Option 1' , value:'roption1'},
        {key:'Option 2' , value:'roption2'},
        {key:'Option 3' , value:'roption3'},
    ]

    const checkoptions =[
        // {key:'Choose' , value:''},
        {key:'Option 1' , value:'roption1'},
        {key:'Option 2' , value:'roption2'},
        {key:'Option 3' , value:'roption3'},
    ]
    const initialValues ={
        email:'',
        description:'',
        selectoptions:'',
        radiooptions:'',
        checkoptions:[],
        birthDate:null,
        
    }
    const validationSchema = Yup.object({
        email : Yup.string().required('Required'),
        description : Yup.string().required('Required'),
        selectoptions : Yup.string().required('Required'),
        radiooptions : Yup.string().required('Required'),
        checkoptions : Yup.array().min(1,"required atleast one"),
        birthDate : Yup.date().required('Required')
    })
    const onSubmit = values => {
        console.log("formik  values" ,values)
        console.log("formik : ",JSON.parse(JSON.stringify(values)))
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => (
                <Form>
                    <FormikControl control='input' name='email' label='E-mail' type='email' />
                    <FormikControl control='textarea' name='description' label='Description'  />
                    <FormikControl control='select' name='selectoptions' label='Select a Topic'  dropdownoptions={dropdownoptions}/>
                    <FormikControl control='radio' name='radiooptions' label='Choose one'  options={radiooptions}/>
                    <FormikControl control='checkbox' name='checkoptions' label='Pick them'  options={checkoptions}/>
                    <FormikControl control='date' name='birthDate' label='Pick a date'/>
                    <button type='submit'>Submit</button>
                </Form>
            )
        }
    </Formik>
  )
}

export default FormikContainer