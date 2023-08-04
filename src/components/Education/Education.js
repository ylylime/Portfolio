import React, { Fragment } from "react";

import EducationData from "../../Data/EducationData";
import Degree from "./Degree";
import classes from "./education.module.css";

function Education(props) {

    const languagesDone=EducationData.codingStatus;
    return (
        <Fragment>
            <div className={classes.educationHeader}>
                <div className={classes.educationCard}>
                    <h1>Education</h1>
                </div>
            </div>
            <Degree />
        </Fragment>
    )
}
export default Education;