import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../../style/HomepageStyle.scss'


export default function HomeSearch(){
    return(
        <Container fluid>
            <Row  className="homeSearch">
                <Col>
                    <p>Learn to Design</p>
                    <Form>
                        <Form.Group>
                            <input type="text" placeholder="Search..."/>
                            <Button><img src={require('../../media/Homepage/search white.png')} style={{width: '30px'}}/></Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="vector1">
                <Col><br/></Col>
            </Row>
        </Container>
    );
}