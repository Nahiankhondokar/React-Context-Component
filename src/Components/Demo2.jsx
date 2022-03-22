import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Demo2 = ({msg}) => {
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

export default Demo2;