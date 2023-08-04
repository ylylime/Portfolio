import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"

function Degree(props) {

    return (
        <div className={classes.degreeMain}>
            <h1>
                Degree Pursuing
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`}>
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        <h1>{EducationData.collegeName}</h1>
                        <h2>{EducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Degree;