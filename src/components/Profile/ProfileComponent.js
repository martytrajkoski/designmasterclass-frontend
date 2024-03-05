import { Container, Card, Button } from "react-bootstrap";
import '../../style/ProfileStyle.scss'
import { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';

export default function ProfileComponent(){

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async() => {
      try {
        const response = await axiosClient.get('/api/userview/',{
          headers:{
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data');      
      }
    };
    
    fetchCurrentUser();
  }, []);

    return(
        <Container>
            <Card className="profileCard">
                <Card.Body style={{padding: '0px'}}>
                    <Card.Text className="profileInfo">First Name:  {userData ? userData.firstName : 'Loading...'}</Card.Text>    
                    <Card.Text className="profileInfo">Last Name: {userData ? userData.lastName : 'Loading...'}</Card.Text>
                    <Card.Text className="profileInfo">Username: {userData ? userData.username : 'Loading...'} </Card.Text>
                    <Card.Text className="profileInfo">Email: {userData ? userData.email : 'Loading...'} </Card.Text>
                    <Card.Text className="profileInfo">Payment: {userData ? userData.payment : 'Loading...'}</Card.Text>
                </Card.Body>
            </Card>
        </Container> 
    );
}