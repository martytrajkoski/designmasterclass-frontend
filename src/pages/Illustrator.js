import SideBar from "../components/Tutorials/Illustrator/SideBar";
import Navibar from "../components/Navbar/Navibar";
import Content from "../components/Tutorials/Illustrator/Content";
import "../style/TutorialStyle.scss"
import TutorialNavi from "../components/Tutorials/TutorialNavi";

export default function Illustrator(){
    return(
        <div className="tutorialContent">
            <Navibar />
            <TutorialNavi />
            <div className="content">
                <SideBar></SideBar>
                <Content></Content>
            </div>
        </div>
        
    )
}