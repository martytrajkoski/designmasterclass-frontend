import "../style/QuizzesStyle.scss"
import Navibar from '../components/Navbar/Navibar'
import QuizzesSearch from "../components/Quizzes/QuizzesSearch";
import QuizzesPanel from "../components/Quizzes/QuizzesPanel";
import Footerbar from "../components/Footerbar/Footerbar"

export default function Quizzes(){
    return(
        <div className="quizzes">
            <Navibar/>
            <QuizzesSearch/>
            <QuizzesPanel/>
            <Footerbar/>
        </div>
    );
}