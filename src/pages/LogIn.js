import { Button } from "react-bootstrap";
import '../style/LoginStyle.scss'
import LoginCard from "../components/Login/LoginCard";

export default function Login(){
    return(
        <div className="loginBg">
            <img src={require('../media/Login & Signup/designmasterclasss.png')}/>
            <Button className="closeBtn" href="/"><img src={require('../media/Login & Signup/close white.png')} style={{width: "50px"}}/></Button>
            <LoginCard/>
        </div>
    );
}