import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const url = 'http://localhost:8080/api/departments';
const editUrl = 'http://localhost:8080/api/edit/departments';

function EditForm(props) {
  const [department, setDepartment] = useState({
    name: '',
    email: '',
    role: '',
    assigned:false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${url}/${props.match.params.id}`)
      .then(response =>
        setDepartment({
          ...department,
          name: response.data.data.name,
          email: response.data.data.email,
          role: response.data.data.role,
          assigned: response.data.data.assigned,
        }),
      )
      .catch(err => setErrorMessage('Fetch error. API is not available.'));
    console.log(errorMessage);
  }, []);

  const onChangeName = event => {
    setDepartment({
      ...department,
      name: event.target.value,
    });
  };

  const onChangeEmail = event => {
    setDepartment({
      ...department,
      email: event.target.value,
    });
  };

  const onChangeRole = event => {
    setDepartment({
      ...department,
      role: event.target.value,
    });
  };


  const isInputFieldEmpty = () => {
    return (
      department.name === '' ||
      department.email === '' ||
      department.role === '' ||
      department.assigned === null
    );
  };

  const onClickSubmit = () => {
    axios
      .patch(`${editUrl}/${props.match.params.id}`, department)
      .then(response => console.log(response.data.data));
    closeForm();
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please change the information below to update department
              details then click the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Edit Department</StyledCardHeader>
              <Card.Body>
                <Form>
                  <Form.Group controlId="editName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      name="name"
                      placeholder="Please enter full name"
                      value={department.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="editEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      placeholder="Please enter email"
                      value={department.email}
                      onChange={onChangeEmail}
                    />
                  </Form.Group>
                  <Form.Group controlId="editRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      required
                      name="role"
                      value={department.role}
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
                    size="sm"
                    onClick={() => onClickSubmit()}
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
  background-color: #eea33b;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default EditForm;
