import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Data = ({ msg, setMsg, handleInput }) => {

  return (
    <Container>
        <Row>
            <Col className='my-5'>
                <input value={ msg } type="text"  onChange={ (e) => handleInput(e) }/>
                <p>{ msg }</p>
            </Col>
        </Row>
    </Container>
  )
};

export default Data;