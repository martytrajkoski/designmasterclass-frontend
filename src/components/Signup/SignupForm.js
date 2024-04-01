import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";

export default function SignupForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordErr] = useState("")
    const navigate = useNavigate()

    const submitRegistration = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.post("/api/userregister/",{
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    username: username,
                    password: password
                });
        } catch (error){
            console.log('Cannot sign up')
        }

        try{
            const response = await axiosClient.post("/api/userlogin/",{
                email: email,
                password: password
            });
            
            console.log(response);
    
            const {token} = response.data;
            localStorage.setItem('token', token);
    
            if (response.status === 200){
              navigate(-2);
            }
    
          } catch (error) {
            console.log('Invalid credentials')
            setPasswordErr("Invalid email or password")
          }
    }
    
    return(
        <Form className="signupForm" onSubmit={e => submitRegistration(e)}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter First Name"
                    onChange={e => setFirstName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Last Name" 
                    onChange={e => setLastName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubmit">
                <Button 
                    type="submit" 
                    className="formButton">Sign Up
                </Button>
            </Form.Group>
        </Form>
    );
    
} 