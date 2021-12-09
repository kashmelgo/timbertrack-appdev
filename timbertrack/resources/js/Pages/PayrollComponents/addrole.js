import React, { useState } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const addUrl = 'http://localhost:8080/api/add/roles/';

function AddRole() {
  const [role, setRole] = useState({
    name: '',
    department: '',
    salary: '',
    assigned:false,
  });

  const onChangeName = event => {
    setRole({
      ...role,
      name: event.target.value,
    });
  };

  const onChangeDepartment = event => {
    setRole({
      ...role,
      department: event.target.value,
    });
  };

  const onChangeSalary = event => {
    setRole({
      ...role,
      salary: event.target.value,
    });
  };

  const isInputFieldEmpty = () => {
    return (
      role.name === '' ||
      role.department === '' ||
      role.salary === '' ||
      role.assigned === null
    );
  };

  const handleSubmit = () => {
    axios.post(addUrl, role).then(res => {
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
              Please fill out the form to add a role and then click
              the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Add Role</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Please enter full name"
                      value={role.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="addDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="department"
                      placeholder="Please enter department"
                      value={role.department}
                      onChange={onChangeDepartment}
                    />
                  </Form.Group>
                  <Form.Group controlId="addSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="salary"
                      value={role.salary}
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

export default AddRole;
