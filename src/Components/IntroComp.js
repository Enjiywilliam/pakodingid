import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const IntroComp = () => {
return (
    <div className="intro">
        <Container className="text-white justify-content-center align-items-center">
            <Row>
                <Col>
                    <div className="title text-center">Nonton Gratis</div>
                    <div className="title text-center">Tanpa Ke Blok</div>
                    <div className="introButton mt-4 text-center">
                        <button className="bg-dark fw-bold text-white shadow-lg text-shadow-lg">Daftar Film</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

};



export default IntroComp;
