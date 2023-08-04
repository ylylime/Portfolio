import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
import { autoTypeData } from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {

    function handleTyper() {
        let textItems = autoTypeData;
        var autoTyper = document.getElementById('typer');
        new Typewriter(autoTyper, {
            strings: textItems,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
        });
    }
    useEffect(
        handleTyper
    ,[]);
    return (
        <main>
            <div className={classes.homeContent}>
                <h1 className={classes.greeting}>
                    Hi There !
                </h1>
                <h2>I'm <span id="name">{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span></h2>
                <div className={classes.autoText}>
                    I am a <span id="typer"></span>
                </div>
                <p className={classes.connectText}>Feel free to <span>connect</span> with me.</p>
                <SocialLinks className={classes.links} />
            </div>
            <div className={classes.avatarImage}>
                <img src={profileAvatar} alt="" srcSet="" />
            </div>
        </main>
    )
}
export default Home;