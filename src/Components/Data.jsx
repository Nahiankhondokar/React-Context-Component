import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../Context/MsgContext';

const Data = () => {

  const [ msg, handleInput ] = useContext(MsgContext);

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