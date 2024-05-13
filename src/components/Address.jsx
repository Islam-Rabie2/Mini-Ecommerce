import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

const Address = () => {
  const [theme] = useThemeHook();

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col
          style={{ width: "90%" }}
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light"
          }`}
        >
          <Row>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last name"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Row>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>State</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>City</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>

          <Button
            type="submit"
            className={`${
              theme ? "bg-dark-primary text-black" : "bg-light-primary"
            } m-auto d-block`}
            style={{ border: 0 }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Address;
