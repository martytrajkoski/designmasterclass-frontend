import HomeIllustrator from "../components/Homepage/HomeIllustrator";
import HomePhotoshop from "../components/Homepage/HomePhotoshop";
import HomeSearch from "../components/Homepage/HomeSearch";
import Navibar from "../components/Navbar/Navibar";
import '../style/HomepageStyle.scss'

export default function Homepage(){
    return(
        <div className="homepage">
            <Navibar></Navibar>
            <HomeSearch></HomeSearch>
            <HomePhotoshop></HomePhotoshop>
            <HomeIllustrator></HomeIllustrator>
        </div>
        
    );
}