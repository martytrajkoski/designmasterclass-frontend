import { Button } from "react-bootstrap";
import '../../style/Navibar.scss';
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useState } from "react";

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

    const navigateProfile = () => {
        navigate('/profile')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className="Naviright">
            <Button><img src={require('../../media/Navbar/search white.png')} style={{height: '28px'}}/></Button>
            <Button>Paid Courses</Button>
            <Button onClick={navigateProfile}>Profile</Button>
            {localStorage.getItem('token') ? (
                <Button onClick={handleLogout}>Log Out</Button>
            ) : (
                <Button onClick={navigateLogin}>Log In</Button>
            )}
        </div>
    );
    };