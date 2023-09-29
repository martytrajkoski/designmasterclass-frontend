import Navibar from "../components/Navbar/Navibar";
import ProfileComponent from "../components/Profile/ProfileComponent";
import SideBar from "../components/Profile/SideBar";
import SubscriptionComponent from "../components/Profile/SubscriptionComponent"

export default function Profile(){
    return(
        <div>
            <ProfileComponent></ProfileComponent>
            {/* <SubscriptionComponent></SubscriptionComponent> */}
        </div> 
    );
}