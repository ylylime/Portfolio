import React, { Fragment } from 'react';

import classes from './aboutMe.module.css';
import Photo from '../../Data/personalPhoto.jpg';
import PersonalData from '../../Data/PersonalData';
import SocialLinks from '../SocialLinks/SocialLinks';

const AboutMe = () => {
    return (
        <Fragment>
            <div className={classes.contactMe}>
                <div className={classes.avatar}>
                    <img src={Photo} alt="" />
                </div>
                <div className={classes.contactCard}>
                    <h1>About Me</h1>
                    <div>
                        {PersonalData.aboutMe}
                    </div>
                    <div className={classes.contactLinks}>
                        <SocialLinks className={classes.links} />
                    </div>
                    <a href={PersonalData.resumeLink}>
                    </a>
                </div>
            </div>
        </Fragment>
    )
};
export default AboutMe;