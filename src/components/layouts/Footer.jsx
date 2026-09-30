import estilo from "./Footer.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={`${estilo["mi-footer"]} text-center py-3 mt-4`}>
      <Row className="justify-content-center mb-3">
        <Col  xs={12} md={6}>
          <Form className="mx-auto d-flex gap-2 align-items-end px-3"  style={{width:'100%', maxWidth: '500px',minWidth:'250px' }}>
            <Form.Group className="mb-0 flex-grow-1 text-start" controlId="formBasicEmail">
              <Form.Label>Newsletter</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Button variant="outline-light" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      
      <p>2026 - Tienda de chocolates - Todos los derechos reservados</p>
      <p>
            <i className="bi bi-whatsapp">
              <span> +54 9 11 12345678</span>
            </i>
            
          </p>
    </footer>
  )
}

export default Footer;