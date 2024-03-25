import React, { useState } from "react";
import Navibar from '../components/Navbar/Navibar';
import QuizzesSearch from "../components/Quizzes/QuizzesSearch";
import QuizCard from "../components/Quizzes/QuizCard";
import Footerbar from "../components/Footerbar/Footerbar";
import "../style/QuizzesStyle.scss";

export default function Quizzes() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="quizzes">
            <Navibar />
            <QuizzesSearch setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} />
            <QuizCard selectedCategory={selectedCategory} searchQuery={searchQuery} />
            <Footerbar />
        </div>
    );
}
