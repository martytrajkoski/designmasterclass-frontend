import React, { useState } from "react";
import Navibar from '../components/Navbar/Navibar';
import CoursesSearch from "../components/Courses/CoursesSearch";
import CourseCard from "../components/Courses/CourseCard";
import Footerbar from "../components/Footerbar/Footerbar";
import "../style/CoursesStyle.scss"

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="courses">
            <Navibar />
            <CoursesSearch setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchQuery} />
            <CourseCard selectedCategory={selectedCategory} searchQuery={searchQuery} />
            <Footerbar />
        </div>
    );
}