import React from "react";

import SocialData from "../../Data/SocialData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import classes from "./socialLinks.module.css";
const SocialLinks = (props) => {

    return (
        <div className={`${classes.socialLinks} ${props.className}`} >
            <a href={SocialData.githubLink} ><GitHubIcon fontSize="large" /></a>
            <a href={SocialData.linkedInLink}><LinkedInIcon fontSize="large" /></a>
            <a href={SocialData.emailLink}><EmailIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;