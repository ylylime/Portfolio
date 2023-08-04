import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectItem = (props) => {

    let description=props.project.description;
    if(description===''){
        description=" project description";
    }
    

    return (
        <Card className={classes.projectItem}>
            <h2>{props.project.projectTitle}</h2>
            <p className={classes.description}>{description}</p>
            <p className={classes.description}>{props.project.tools}</p>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    <a target="_blank" rel="noreferrer" href={props.project.sourceLink}><GitHubIcon fontSize="large" /></a>
                </div>
                <p className={classes.dateUpdated}>Last Updated On : {props.project.lastUpdated}</p>
            </div>
        </Card>
    )
};
export default ProjectItem;