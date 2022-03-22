import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Demo1 = ({ msg }) => {
  return (
    <Container>
        <Row>
            <Col className=''>
                <h2>{msg}</h2>
            </Col>
        </Row>
    </Container>
  )
};

export default Demo1;