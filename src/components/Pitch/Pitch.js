import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Teams from '../Teams/Teams';

const pitch = (props) => {
    return (
        <div>
        <Container id="Pitch">
            {/* <Row noGutters="true"> */}
                <Col className="pCol">
                    <Teams id="teams" teams={props.teams} />
                </Col>
            {/* </Row> */}
        </Container>
        <br/>
        <button onClick={props.clicked}>Run</button>
        </div>
    )

}

export default pitch;