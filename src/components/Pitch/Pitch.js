//Used in the App components, and holds Teams

import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Teams from '../Teams/Teams';

const pitch = (props) => {
    return (
        <Container fluid="true" id="Pitch">
            <Row>
                <Col className="pCol">
                    <Teams id="teams" 
                           teams={props.teams} />
                </Col>
            </Row>    
        </Container>          
    )
}

export default pitch;