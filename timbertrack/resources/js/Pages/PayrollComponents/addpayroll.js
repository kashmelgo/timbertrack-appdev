import React, { useState } from 'react';
import { Row, Col, Form, Container, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { closeForm } from './Utilities/CloseForm';

const addUrl = 'http://localhost:8080/api/add/roles/';

function AddPayroll() {
  const [payroll, setPayroll] = useState({
    name: '',
    basesalary: '',
    overtime: '',
    rate: '',
    gross:'',
    assigned:false,
  });

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
  const onChangeGross = event => {
    setPayroll({
      ...payroll,
      gross: event.target.value,
    });
  };
  const isInputFieldEmpty = () => {
    return (
      payroll.name === '' ||
      payroll.basesalary === '' ||
      payroll.overtime === '' ||
      payroll.rate === '' ||
      payroll.gross === '' ||
      payroll.assigned === null
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
              Please fill out the form to add a payroll and then click
              the submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Add Payroll</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
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
                  <Form.Group controlId="addBaseSalary">
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
                  <Form.Group controlId="addOvertime">
                    <Form.Label>Overtime</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="overtime"
                      value={payroll.overtime}
                      onChange={onChangeOvertime}
                    />
                  </Form.Group>
                  <Form.Group controlId="addRate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="rate"
                      value={payroll.rate}
                      onChange={onChangeRate}
                    />
                  </Form.Group>
                  <Form.Group controlId="addGross">
                    <Form.Label>Gross Income</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      name="gross"
                      value={payroll.gross}
                      onChange={onChangeGross}
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

export default AddPayroll;
