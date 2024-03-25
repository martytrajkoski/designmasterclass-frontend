import { Form, Button } from "react-bootstrap"
import React, { useState, useEffect, useRef } from 'react';
import axiosClient from '../../api/axiosClient';
import {useNavigate} from 'react-router-dom'

export default function LoginForm(){

    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errRef = useRef(null);
    const [passwordError, setPasswordErr] = useState("")
    const navigate = useNavigate()

    const submitLogin = async (e) => {
      e.preventDefault();
      try{
        const response = await axiosClient.post("/api/userlogin/",{
            email: email,
            password: password
        });
        
        console.log(response);

        const {token} = response.data;
        localStorage.setItem('token', token);

        if (response.status === 200){
          navigate(-1);
        }

      } catch (error) {
        console.log('Invalid credentials')
        setPasswordErr("Invalid email or password")
      }
    }

    return(
        <Form className="loginForm" onSubmit={submitLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <Form.Text style={{ color: "white" }}>
                    Need an account? <a href="/signup" style={{ color: "#FC9C4B", fontWeight: 600 }}>Sign up</a>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubmit">
                <Button type="submit" className="formButton">
                    Log In
                </Button>
            </Form.Group>
        </Form>
    );
    
} 