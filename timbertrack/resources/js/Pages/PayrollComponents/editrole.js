import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const url = 'http://localhost:8080/api/roles';
const editUrl = 'http://localhost:8080/api/edit/roles';

function EditSalary(props) {
  const [role, setRole] = useState({
    name: '',
    department: '',
    salary: '',
    assigned:false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${url}/${props.match.params.id}`)
      .then(response =>
        setRole({
          ...role,
          name: response.data.data.name,
          department: response.data.data.email,
          salary: response.data.data.role,
          assigned: response.data.data.assigned,
        }),
      )
      .catch(err => setErrorMessage('Fetch error. API is not available.'));
    console.log(errorMessage);
  }, []);

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
      ...salary,
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

  const onClickSubmit = () => {
    axios
      .patch(`${editUrl}/${props.match.params.id}`, role)
      .then(response => console.log(response.data.data));
    closeForm();
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please change the information below to update role
              details then click the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Edit Role</StyledCardHeader>
              <Card.Body>
                <Form>
                  <Form.Group controlId="editName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      name="name"
                      placeholder="Please enter role name"
                      value={role.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="editDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      required
                      name="department"
                      placeholder="Please enter department"
                      value={role.department}
                      onChange={onChangeDepartment}
                    />
                  </Form.Group>
                  <Form.Group controlId="editSalary">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      required
                      name="salary"
                      value={role.salary}
                      onChange={onChangeSalary}
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

export default EditSalary;
