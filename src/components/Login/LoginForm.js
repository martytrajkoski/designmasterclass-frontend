import { Form, Button } from "react-bootstrap"

export default function LoginForm(){
    return(
        <Form className="loginForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text style={{ color: "white" }}>
                    Need an account? <a style={{ color: "#FC9C4B", fontWeight: 600 }}>Sign up</a>
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubmit">
                <Button type="submit" className="formButton">
                    Log In
                </Button>
            </Form.Group>
        </Form>
    );
    
} 