import SideBar from "../components/Illustrator/SideBar";
import Navibar from "../components/Navbar/Navibar";
import "../style/PhotoshopTutorialStyle.scss"


export default function Illustrator(){
    return(
        <div>
            <Navibar></Navibar>
            <SideBar></SideBar>
        </div>
    )
}