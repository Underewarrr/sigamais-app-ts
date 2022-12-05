// import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from "axios";
import { Alert, Container, Button } from 'react-bootstrap';
import { Form as FormB } from 'react-bootstrap';

const validadtionSchema = Yup.object().shape({
  email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters')
})

const handleClickLogin = (values: any) => { 
  console.log(values)
}

export const Login = () => {
  
  return (
<Container>
  <FormB>
    <Formik
      initialValues={{}}
      onSubmit={handleClickLogin}
        validationSchema={validadtionSchema}   
      >
    <Form>
      <FormB.Group className="mb-3" controlId="formBasicEmail">
        <FormB.Label>Email address</FormB.Label>
        <Field  name="email"type="email" placeholder="Enter email" />
        <FormB.Text className="text-muted">
          We'll never share your email with anyone else.
        </FormB.Text>
      </FormB.Group>

      <FormB.Group className="mb-3" controlId="formBasicPassword">
        <FormB.Label>Password</FormB.Label>
        <Field name="password" type="password" placeholder="Password" />
      </FormB.Group>
      <FormB.Group className="mb-3" controlId="formBasicCheckbox">
        <FormB.Check type="checkbox" label="Check me out" />
      </FormB.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <ErrorMessage
            name="password"
            component={() => (
                <div className="alert alert-danger" role="alert">
                    <Alert variant="danger">
                        Insira uma senha ou email valido
                    </Alert>
                </div>
            )}
            />
    </Form>
    </Formik>
  </FormB>
</Container>
    )
}
