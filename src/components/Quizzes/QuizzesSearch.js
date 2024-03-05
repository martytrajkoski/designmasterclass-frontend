import { Container, Row, Col, Form, Button } from "react-bootstrap";


export default function QuizzesSearch(){
    return(
        <div className="quizzesSearch">
            <div className="searchBar">
                <Form>
                    <Form.Group>
                        <input type="text" placeholder="Search quiz..." />
                        <Button><img src={require('../../media/Homepage/search white.png')} style={{ width: '30px' }} /></Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="searchButtons">
                <p>Quizzes</p>
                <div className="buttons">
                    <Button>Saved</Button>
                </div>
            </div>
        </div>
    );
}