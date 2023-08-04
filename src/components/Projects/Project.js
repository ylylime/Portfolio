import React from "react";

import styles from "./project.module.css";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";

const Projects = (props) => {
    let projects = ProjectsData.DUMMY_PROJECTS;
    return (
        <React.Fragment>
            <div className={styles.projects}>
                <section className={styles.projectHeader}>
                    <h1><span>My Recent </span><span>Works</span></h1>
                    <div>I have works from internships, cohorts, hackathons, and personal projects. Here are some of them.</div>
                </section>
            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a target="_blank" rel="noreferrer" href={`${SocialData.githubLink}?tab=repositories`}>
                </a>
            </div>
        </React.Fragment>
    )
};

export default Projects;