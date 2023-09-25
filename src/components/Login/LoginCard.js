import LoginForm from "./LoginForm";

export default function LoginCard(){
    return(
        <div className="loginCard">
            <p className="cardTitle">Log In</p>
            <LoginForm/>
        </div>
    );
}