import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {useRef, useState, useEffect} from "react";

function Login(){ 
  return (
    <>
    <div class="login-div">
        <Container className="w-50">
        <Card className="p-3">
          <Card.Header className="text-center">
            <h2>Inicio de sesión</h2>
          </Card.Header>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
          type="email"
          title='El correo electronico es invalido o esta mal escrito, intentalo de nuevo'
          autoFocus
          required
          placeholder="Correo electronico"
          maxLength={"100"}
         />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
        title='Contraseña incorrecta'
        type="password"
        placeholder="Contraseña"
        maxLength={"20"}
        required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Card>
    </Container>
    </div>
    </>
  );
}

export default Login;