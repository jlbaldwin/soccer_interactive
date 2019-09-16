import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Teams from '../Teams/Teams';
import { faRedoAlt, faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pitch = (props) => {
    return (
        <div>
            <Container id="Pitch">
                {/* <Row noGutters="true"> */}
                    <Col className="pCol">
                        <Teams id="teams" 
                            teams={props.teams} />
                    </Col>
                {/* </Row> */}
            </Container>

            <br/>

            <ButtonGroup aria-label="Basic example">
                <Button onClick={props.backStart} variant="secondary">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </Button>
                <Button onClick={props.backOne} variant="secondary">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button onClick={props.replay} variant="secondary">
                    <FontAwesomeIcon icon={faRedoAlt} />
                </Button>
                <Button onClick={props.forwardOne} variant="secondary">
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
                <Button onClick={props.forwardEnd} variant="secondary">
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default pitch;