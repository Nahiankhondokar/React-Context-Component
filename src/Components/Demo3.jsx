import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Demo3 = ({msg, handleInput}) => {
  return (
    <Container>
        <Row>
            <Col className=''>
                <input value={ msg } type="text"  onChange={ (e) => handleInput(e) }/>
                <h2>{msg}</h2>
            </Col>
        </Row>
    </Container>
  )
};

export default Demo3;