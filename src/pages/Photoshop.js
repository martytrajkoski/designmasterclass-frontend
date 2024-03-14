import Navibar from "../components/Navbar/Navibar";
import SideBar from "../components/Tutorials/Photoshop/SideBar";
import Content from "../components/Tutorials/Photoshop/Content";
import "../style/TutorialStyle.scss"
import TutorialNavi from "../components/Tutorials/TutorialNavi";

export default function Photoshop(){
    return(
        <div className="tutorialContent">
            <Navibar/>
            <TutorialNavi />
            <div className="content">
                <SideBar/>
                <Content/>
            </div>
        </div>
    );
}