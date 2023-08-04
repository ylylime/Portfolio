
import classes from "./programmingSkills.module.css";
import { CPP, python, react, nodeJs, js } from "../asset/svg/svg";
const skills = [CPP, python, react, js, nodeJs];
const ProgrammingSkills = (props) => {

    return (
        <div className={classes.mainCard}>
            <h1>Programming SkillSet</h1>
            <div className={classes.skillSetCard}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} key={index}>
                        <div className={classes.name}>React</div>
                        <Item />
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;