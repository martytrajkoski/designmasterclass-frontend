import { Button } from "react-bootstrap";
import '../../style/Navibar.scss';
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useState, useEffect } from "react";

export default function NaviRight() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await axiosClient.post("api/userlogout/");
            localStorage.removeItem('token');
            window.location.reload();
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    }

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

    const navigateCourses = () => {
        navigate('/courses')
    }
    const navigateProfile = () => {
        navigate('/profile')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className="Naviright">
            <Button onClick={navigateCourses}>Paid Courses</Button>
            <Button 
                onClick={navigateProfile}
                disabled={isButtonDisabled}>Profile</Button>
            {localStorage.getItem('token') ? (
                <Button onClick={handleLogout}>Log Out</Button>
            ) : (
                <Button onClick={navigateLogin}>Log In</Button>
            )}
        </div>
    );
};
