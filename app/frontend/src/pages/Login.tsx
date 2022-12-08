// import React, {useEffect, useState} from 'react'
import * as Yup from 'yup';
// import axios from "axios";
import { Alert, Container, Button, Card, Form } from 'react-bootstrap';

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
  <Form>
  <Card>
    <Card.Header>
      Login
    </Card.Header>
        <Container>
          <center>
    <Card.Body>
      <Form.Group className="mb-3" controlId="FormasicEmail">
        <Form.Label>Put Email : </Form.Label>
        <Form.Control name="email"type="email" placeholder=" Example@email.com" />
        <br/>
        <Form.Text className="text-muted">
          Nunca compartilhe sua senha.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control name="password" type="password" placeholder=" Password" />
      </Form.Group>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Footer>
      </center>
      </Container>
    </Card>
  </Form>
    )
}
