import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const url = 'http://localhost:8080/api/roles';
const editUrl = 'http://localhost:8080/api/edit/roles';

function EditPayroll(props) {
    const [payroll, setPayroll] = useState({
      name: '',
      basesalary: '',
      overtime: '',
      rate: '',
      assigned:false,
    });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${url}/${props.match.params.id}`)
      .then(response =>
        setRole({
          ...payroll,
          name: response.data.data.name,
          basesalary: response.data.data.basesalary,
          overtime: response.data.data.overtime,
          rate: response.data.data.rate,
          assigned: response.data.data.assigned,
        }),
      )
      .catch(err => setErrorMessage('Fetch error. API is not available.'));
    console.log(errorMessage);
  }, []);

  const onChangeName = event => {
    setPayroll({
      ...payroll,
      name: event.target.value,
    });
  };

  const onChangeBaseSalary = event => {
    setPayroll({
      ...payroll,
      basesalary: event.target.value,
    });
  };

  const onChangeOvertime = event => {
    setPayroll({
      ...payroll,
      overtime: event.target.value,
    });
  };

  const onChangeRate = event => {
    setPayroll({
      ...payroll,
      rate: event.target.value,
    });
  };


  const isInputFieldEmpty = () => {
    return (
      payroll.name === '' ||
      payroll.basesalary === '' ||
      payroll.overtime === '' ||
      payroll.rate === '' ||
      payroll.assigned === null
    );
  };

  const onClickSubmit = () => {
    axios
      .patch(`${editUrl}/${props.match.params.id}`, payroll)
      .then(response => console.log(response.data.data));
    closeForm();
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please change the information below to update payroll
              details then click the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Edit Payroll</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="editName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Please enter full name"
                      value={payroll.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="editBaseSalary">
                    <Form.Label>Base Salary</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="basesalary"
                      placeholder="Please enter base salary"
                      value={payroll.basesalary}
                      onChange={onChangeBaseSalary}
                    />
                  </Form.Group>
                  <Form.Group controlId="editOvertime">
                    <Form.Label>Overtime</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="overtime"
                      value={payroll.overtime}
                      onChange={onChangeOvertime}
                    />
                  </Form.Group>
                  <Form.Group controlId="editRate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="rate"
                      value={payroll.rate}
                      onChange={onChangeRate}
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
  background-color: #eea33b;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default EditPayroll;
