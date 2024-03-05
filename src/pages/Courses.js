import "../style/CoursesStyle.scss"
import Navibar from '../components/Navbar/Navibar'
import CoursesSearch from "../components/Courses/CoursesSearch";
import CoursesPanel from "../components/Courses/CoursesPanel";
import Footerbar from "../components/Footerbar/Footerbar"

export default function Courses(){
    return(
        <div className="courses">
            <Navibar/>
            <CoursesSearch/>
            <CoursesPanel/>
            <Footerbar/>
        </div>
    );
}