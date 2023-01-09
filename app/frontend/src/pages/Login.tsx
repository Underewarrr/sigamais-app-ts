import React, { useEffect, useState } from 'react'
import { requestLogin, setToken } from '../services/requests';

import { Alert, Container, Button, Card, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);  

  const login = async (event: any) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      localStorage.setItem('token',  token);
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
    <><NavBar /><Form>
      <Card>
        <Card.Header>
          Login
        </Card.Header>
        <Container>
          <center>
            <Card.Body>
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
                onClick={(event) => login(event)}
              >
                Login
              </Button>
              {(failedTryLogin)
                ? (
                  <Alert variant="danger">
                    {`O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`}
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
