import React, { useState } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const addUrl = 'http://localhost:8080/api/add/employees/';

function AddForm() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    role: '',
    assigned:false,
  });

  const onChangeName = event => {
    setEmployee({
      ...employee,
      name: event.target.value,
    });
  };

  const onChangeEmail = event => {
    setEmployee({
      ...employee,
      email: event.target.value,
    });
  };

  const onChangeRole = event => {
    setEmployee({
      ...employee,
      role: event.target.value,
    });
  };

  const isInputFieldEmpty = () => {
    return (
      employee.name === '' ||
      employee.email === '' ||
      employee.role === '' ||
      employee.assigned === null
    );
  };

  const handleSubmit = () => {
    axios.post(addUrl, employee).then(res => {
      console.log(res.data.data);
      closeForm();
    });
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please fill out the form to add an employee and then click
              the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Add Employee</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Please enter full name"
                      value={employee.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="addEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="email"
                      placeholder="Please enter email"
                      value={employee.email}
                      onChange={onChangeEmail}
                    />
                  </Form.Group>
                  <Form.Group controlId="addRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="color"
                      value={employee.role}
                      onChange={onChangeRole}
                    />
                  </Form.Group>
                
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => closeForm()}
                  >
                    Cancel
                  </Button>
                  <StyledButton
                    className="style-button"
                    size="sm"
                    type="submit"
                    disabled={isInputFieldEmpty()}
                  >
                    Submit
                  </StyledButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const H6 = styled.h6`
  margin-bottom: 10px;
  color: #858484;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #3277b2;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default AddForm;
