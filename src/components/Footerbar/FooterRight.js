import { Button } from "react-bootstrap";

export default function FooterRight(){
    return(
        <div className="footerRight">
            <Button><img src={require('../../media/Navbar/search white.png')} style={{height: '28px'}}/></Button>
            <Button>Tutorials</Button>
            <Button>Quizzes</Button>
            <Button>Paid Courses</Button>
            <Button>Profile</Button>
            <Button>Log In</Button>
        </div>
    );
}