import { Button } from "react-bootstrap";
import '../../style/Navibar.scss';

export default function NaviRight() {
        return (
            <div className="Naviright">
                <Button><img src={require('../../media/Navbar/search white.png')} style={{height: '28px'}}/></Button>
                <Button>Paid Courses</Button>
                <Button href="/profile">Profile</Button>
                <Button href="/login">Log In</Button>
            </div>
        );
    };