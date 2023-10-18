import Navibar from "../components/Navbar/Navibar";
import SideBar from "../components/Photoshop/SideBar";
import "../style/PhotoshopTutorialStyle.scss"

export default function Photoshop(){
    return(
        <div>
            <Navibar/>
            <SideBar/>
        </div>
    );
}