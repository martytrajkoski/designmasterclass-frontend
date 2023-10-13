import { Container, Row, Col, Button } from "react-bootstrap";

export default function HomeIllustrator(){
    return(
        <Container fluid>
            <Row className="vector2">
                <Col>
                    <br></br>
                </Col>
            </Row>
            <Row className="homeCard homeIllustrator">
                <Col>
                    <p className="homeTitle">Abobe Illustrator</p>
                    <p className="homeCaption">Platform for editing raster graphics</p>
                    <Button style={{backgroundColor:'#6D659C'}} href="/illustrator">Learn Illustrator</Button>
                </Col>
                <Col>
                    <img src={require('../../media/Homepage/Portada-illustrator.jpg')} style={{width: '400px'}}/>
                </Col>
            </Row>
        </Container>
    );
}