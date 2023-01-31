import React, { useEffect, useState } from 'react'
import { sendData, setToken } from '../services/requests';

import { Alert, Container, Button, Card, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';

export const Register = () => {

  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);  

  const register = async (event: any) => {
    event.preventDefault();

    try {
      const result = await sendData('/register', { username, email, password });
      setIsLogged(true);
    } catch (error) {
      setTimeout(() => {
      setFailedTryLogin(true);

      }, 1000)
      setIsLogged(false);
    }
  };

  useEffect(() => {
     setTimeout(() => {
       setFailedTryLogin(false);
     }, 1000)
  }, [email, password])

  if (isLogged) return <Navigate to="/panel" />;

  return (
    <><Header /><Form>
      <Card>
        <Card.Header>
          Register
        </Card.Header>
        <Container>
          <center>
            <Card.Body>
            <Form.Group className="mb-3" controlId="FormasicEmail">
                <Form.Label>Name : </Form.Label>
                <Form.Control
                  value={username}
                  onChange={({ target: { value } }) => setuserName(value)}
                  name="username"
                  type="email"
                  placeholder=" Example" />
              </Form.Group>
                <br />
              <Form.Group className="mb-3" controlId="FormasicEmail">
                <Form.Label>Email : </Form.Label>
                <Form.Control
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                  name="email"
                  type="email"
                  placeholder=" Example@email.com" />
                <br />
                <Form.Text className="text-muted">
                  Nunca compartilhe sua senha.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormasicPassword">
                <Form.Label>Password : </Form.Label>
                <Form.Control
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                  name="password"
                  type="password"
                  placeholder=" Password" />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                type="submit"
                onClick={(event) => register(event)}
              >
                Login
              </Button>
              {(failedTryLogin)
                ? (
                  <Alert variant="danger">
                    {`O endereço de e-mail ja esta em uso por outro usuario.
                    Por favor, tente novamente. Com um novo email`}
                  </Alert>
                )
                : null}
            </Card.Footer>
          </center>
        </Container>
      </Card>
    </Form></>
    )
}
