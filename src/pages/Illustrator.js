import SideBar from "../components/Illustrator/SideBar";
import Navibar from "../components/Navbar/Navibar";
import Content from "../components/Illustrator/Content";
import "../style/TutorialStyle.scss"


export default function Illustrator(){
    return(
        <div>
            <Navibar></Navibar>
            <SideBar></SideBar>
            <Content></Content>
        </div>
    )
}