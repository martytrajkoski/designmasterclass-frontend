import Navibar from "../components/Navbar/Navibar";
import ProfileComponent from "../components/Profile/ProfileComponent";
import ProfileQuizzes from "../components/Profile/ProfileQuizzes";
import ProfileCourses from "../components/Profile/ProfileCourses";
import '../style/ProfileStyle.scss'

export default function Profile(){
    return(
        <div>
            <Navibar></Navibar>
            <div className="content">
                <ProfileComponent></ProfileComponent>
            </div>
            <div className="saved">
                <ProfileCourses />
                <ProfileQuizzes />
            </div>
        </div> 
    );
}