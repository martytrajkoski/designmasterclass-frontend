import { Button } from "react-bootstrap";
import '../style/SignupStyle.scss'
import SignupCard from "../components/Signup/SignupCard";

export default function Signup(){
    return(
        <div className="signupBg">
            <img src={require('../media/Login & Signup/designmasterclass.png')}/>
            <Button className="closeBtn" href="/home"><img src={require('../media/Login & Signup/close white.png')} style={{width: "50px"}}/></Button>
            <SignupCard/>
        </div>
    );
}