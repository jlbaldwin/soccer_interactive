import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { faRedoAlt, faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const controls = (props) => {
    return (
        <ButtonGroup id="animationButtonGroup" aria-label="Basic example">
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
    )
}


export default controls;