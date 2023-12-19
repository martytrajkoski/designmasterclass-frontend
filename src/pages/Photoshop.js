import Navibar from "../components/Navbar/Navibar";
import SideBar from "../components/Photoshop/SideBar";
import Content from "../components/Photoshop/Content";
import "../style/TutorialStyle.scss"

export default function Photoshop(){
    return(
        <div>
            <Navibar/>
            <div className="content">
                <SideBar/>
                <Content/>
            </div>
        </div>
    );
}