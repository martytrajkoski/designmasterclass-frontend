import "../style/QuizzesStyle.scss"
import Navibar from '../components/Navbar/Navibar'
import QuizzesSearch from "../components/Quizzes/QuizzesSearch";
import Footerbar from "../components/Footerbar/Footerbar"
import QuizCard from "../components/Quizzes/QuizCard";
import React, { useState } from "react";

export default function Quizzes(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    return(
        <div className="quizzes">
            <Navibar/>
            <QuizzesSearch setSelectedCategory={setSelectedCategory}/>
            <QuizCard selectedCategory={selectedCategory}/>
            <Footerbar/>
        </div>
    );
}