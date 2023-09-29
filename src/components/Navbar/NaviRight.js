import { Button } from "react-bootstrap";
import '../../style/Navibar.scss';
import { useNavigate } from "react-router-dom";

export default function NaviRight() {

    const navigate = useNavigate();

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
                <Button onClick={navigateLogin}>Log In</Button>
            </div>
        );
    };