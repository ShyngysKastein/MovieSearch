import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerUI = () => (
    <div className="spinner">
        <Spinner variant="success" animation="grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
)

export default SpinnerUI;