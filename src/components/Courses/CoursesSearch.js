import { Container, Row, Col, Form, Button } from "react-bootstrap";


export default function CoursesSearch(){
    return(
        <div className="coursesSearch">
            <div className="searchBar">
                <Form>
                    <Form.Group>
                        <input type="text" placeholder="Search course..." />
                        <Button><img src={require('../../media/Homepage/search white.png')} style={{ width: '30px' }} /></Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="searchButtons">
                <p>Paid Coruses</p>
                <div className="buttons">
                    <Button>Photoshop</Button>
                    <Button>Illustrator</Button>
                    <Button style={{ float: 'right' }}>Saved</Button>
                </div>
            </div>
        </div>
    );
}