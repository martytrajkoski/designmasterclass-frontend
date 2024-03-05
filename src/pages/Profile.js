import Navibar from "../components/Navbar/Navibar";
import ProfileComponent from "../components/Profile/ProfileComponent";
import SubscriptionComponent from "../components/Profile/SubscriptionComponent"
// import SideBar from "../components/Profile/SideBar";
import '../style/ProfileStyle.scss'

export default function Profile(){
    return(
        <div>
            <Navibar></Navibar>
            <div className="content">
                <ProfileComponent></ProfileComponent>
                <SubscriptionComponent></SubscriptionComponent>
            </div>
        </div> 
    );
}