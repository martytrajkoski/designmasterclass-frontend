import { Container, Card, Button } from "react-bootstrap";
import '../../style/ProfileStyle.scss'
import { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';

export default function ProfileComponent(){

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async() => {
      try {
        console.log('Before fetching user data');
        const response = await axiosClient.get('/api/userview/',{
          headers:{
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        });
        setUserData(response.data.user);
        console.log('After fetching user data');
      } catch (error) {
        console.error('Error fetching user data');      
      }
    };
    
    fetchCurrentUser();
  }, []);
  

  console.log('userData:', userData);

  // if(error){
  //   console.log(error)
  // }

  // if(!userData){
  //   console.log("loading..")
  // }

    return(
        <Container>
            <Card className="profileCard">
                <Card.Body style={{padding: '0px'}}>
                    <Card.Text className="profileInfo">First Name:  </Card.Text>    
                    {/* {userInfo?.firstName}  posle name*/}
                    <Card.Text className="profileInfo">Last Name: </Card.Text>
                    {/* {userInfo?.lastName} */}
                    <Card.Text className="profileInfo">Username: {userData ? userData.email : 'Loading...'} </Card.Text>
                    {/* {userData.email && <p>Username: {userData.email}</p>} */}
                    {/* {userInfo?.userName} */}
                    <Card.Text className="profileInfo">Payment:</Card.Text>
                    {/* {userInfo?.transaction} */}
                </Card.Body>
            </Card>
        </Container> 
    );
}