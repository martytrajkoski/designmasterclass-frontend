import { Button } from "react-bootstrap";
import '../../style/Navibar.scss';

export default function NaviRight() {
        return (
            <div className="Naviright">
                <Button><img src={require('../../media/Navbar/search white.png')} style={{height: '20px'}}/></Button>
                <Button>Paid Courses</Button>
                <Button>Profile</Button>
                <Button>Log In</Button>
            </div>
        );
    };