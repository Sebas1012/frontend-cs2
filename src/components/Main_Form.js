import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Main_Form extends Component {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 100 }}>
            <h4>Formulario de Ejemplo</h4>
                <Form style={{ width: 700 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Escribe tu nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control type="email" placeholder="Escribe tus apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Texto: </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Postear
                    </Button>
                </Form>
            </div>
        )
    }
}
