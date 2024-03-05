import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function FooterRight(){

    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const fetchCurrentUser = async() => {
            try {
                const response = await axiosClient.get('/api/userview/',{
                    headers:{
                        Authorization: `Token ${localStorage.getItem('token')}`
                    }
                });
                setUserData(response.data.user);
                setIsButtonDisabled(false);
            } catch (error) {
                console.error('Error fetching user data');      
            }
        };
        
        fetchCurrentUser();
    }, []);

    const navigateQuizzes = () => {
        navigate('/quizzes')
    }
    const navigateCourses = () => {
        navigate('/courses')
    }
    const navigateProfile = () => {
        navigate('/profile')
    }

    return(
        <div className="footerRight">
            <Button>Tutorials</Button>
            <Button onClick={navigateQuizzes}>Quizzes</Button>
            <Button onClick={navigateCourses}>Paid Courses</Button>
            <Button 
            onClick={navigateProfile}
            disabled={isButtonDisabled}>Profile</Button>
            <Button>Log In</Button>
        </div>
    );
}