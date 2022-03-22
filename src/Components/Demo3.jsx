import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../Context/MsgContext';

const Demo3 = () => {

  const [ msg, handleInput ] = useContext(MsgContext);

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