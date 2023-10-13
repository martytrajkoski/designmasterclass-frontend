import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePhotoshop(){
    return (
        <Container fluid>
            <Row className="homeCard">
                <Col>
                    <p className="homeTitle">Adobe Photoshop</p>
                    <p className="homeCaption">Platform for editing raster graphics</p>
                    <Button style={{backgroundColor:'#FC9C4B'}} href="/photoshop">Learn Photoshop</Button>
                </Col>
                <Col>
                    <img src={require('../../media/Homepage/photoshop.png')} style={{width: '400px'}}/>
                </Col>
            </Row>
        </Container>
    );
}