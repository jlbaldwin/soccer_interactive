import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Teams from '../Teams/Teams';

const pitch = (props) => {
    return (
        // <div className="Pitch">
            <Container fluid="true" id="Pitch">
                {/* <Row noGutters="true"> */}
                    <Col className="pCol">
                        <Teams id="teams" 
                            teams={props.teams} />
                    </Col>
                {/* </Row> */}
            </Container>          
        // </div>
    )
}

export default pitch;