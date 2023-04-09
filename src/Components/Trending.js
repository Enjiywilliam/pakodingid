import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";

import sriImage from "../assets/images/super/sri.jpg";
import supermanImage from "../assets/images/super/superman.jpg";
import spiderImage from "../assets/images/super/spider.jpg";

const Tranding = () => {
    return (
        <div className="trandingImage">
            <div className="row-cols-lg-1">
                <Container>
                    <Row > 
                       
                        <Col md={2} >
                        <Card className=" card">
                            <Card.Img src={sriImage} />
                            {/* <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>

                        <Col md={2} >
                        <Card className=" card">
                            <Card.Img src={sriImage} />
                            {/* <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>

                        <Col md={2} >
                        <Card className=" card">
                            <Card.Img src={sriImage} />
                            {/* <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>

                        <Col md={2} >
                        <Card className=" card">
                            <Card.Img src={sriImage} />
                            {/* <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>

                        <Col md={2} >
                        <Card className=" card">
                            <Card.Img src={sriImage} />
                            {/* <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>

                        <Col md={2} >
                        <Card className=" card">
                            {/* <Card.Img src={sriImage} />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            sri asih movie
                            </Card.Text>
                            <Button variant="gradient">Go somewhere</Button>
                            </Card.Body> */}
                            </Card>
                        </Col>
                 </Row>
            </Container>
                </div>
        </div>

    );
};


export default Tranding;