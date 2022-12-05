// import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from "axios";
import { Alert, Container, Button, Card } from 'react-bootstrap';
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
  <FormB>
    <Formik
      initialValues={{}}
      onSubmit={handleClickLogin}
      validationSchema={validadtionSchema}   
      >
  <Card>
    <Card.Header>
      Login
    </Card.Header>
    <Form>
        <Container>
          <center>
    <Card.Body>
      <FormB.Group className="mb-3" controlId="formBasicEmail">
        <FormB.Label>Put Email : </FormB.Label>
        <Field name="email"type="email" placeholder=" Example@email.com" />
        <br/>
        <FormB.Text className="text-muted">
          Nunca compartilhe sua senha.
        </FormB.Text>
      </FormB.Group>

      <FormB.Group className="mb-3" controlId="formBasicPassword">
        <FormB.Label>Password : </FormB.Label>
        <Field name="password" type="password" placeholder=" Password" />
      </FormB.Group>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Footer>
      </center>
      </Container>
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
    </Card>
    </Formik>
  </FormB>
    )
}
