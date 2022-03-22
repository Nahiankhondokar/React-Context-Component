import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MsgContext from '../Context/MsgContext';

const Demo2 = () => {

  const [ msg, handleInput ] = useContext(MsgContext);


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