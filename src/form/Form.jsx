import Education from "./Education"
import Experience from "./Experience"
import PersonalInfo from "./PersonalInfo"
import { personalInfoTemplate, educationInfoTemplate, experienceInfoTemplate } from "../util/util"
import { personalInfoExample, educationInfoExample, experienceInfoExample } from "../util/util"
function Form({personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo}) {

    function onReset() {
        setPersonalInfo(
            {...personalInfoTemplate}
        )
        setEducationInfo(
            [].concat(educationInfoTemplate)
        )
        setExperienceInfo(
            [].concat(experienceInfoTemplate)
        )
    }

    function onLoadExample() {
        setPersonalInfo(
            { ...personalInfoExample}
        )
        setEducationInfo(
            [].concat(educationInfoExample)
        )
        setExperienceInfo(
            [...experienceInfoExample]
        )
    }

    return (
        <div className="form">
            <form action="www.google.com">
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
                <Education  educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
                <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
                <button type="reset" onClick={onReset}>Reset</button>
                <button type="button" onClick={onLoadExample}>Load Example</button>
            </form>
            
        </div>
    )
}

export default Form