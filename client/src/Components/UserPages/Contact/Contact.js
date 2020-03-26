import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
require('./styles.css');

export default class ContactForm extends Component {
  render() {
    return (
      <div className="formContainer">
        <Form className="form">
          <h1>Contact Us</h1>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Control type="name" placeholder="name" className="label" />
            <br />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="label"
            />
            <br />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              className="label"
              placeholder="Message"
            />
            <br />
          </Form.Group>
          <Button className="btn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
