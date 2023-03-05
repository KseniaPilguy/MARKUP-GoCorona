import {ExpertSvg} from "../../assets/svg/ExpertSvg";
import Button from "../../shared/Button/Button";
import ExpertsHeader from "./components/ExpertsHeader";

const Experts = () => {
    return (
        <div className="experts_container page_container">
            <div className="experts_header">
                <ExpertsHeader/>
                <div className="small_colored_box" />
                <div className="middle_colored_box" />
                <div className="big_colored_box" />
            </div>
            <div className="experts_body">
                <div className="experts_title_container title_container">
                    <h1>Talk to <span>experts.</span></h1>
                    <p>Book appointments or submit queries into thousands of <br/>forums concerning health issues and
                        prevention <br/>against noval Corona Virus.</p>
                    <Button title='FEATURES' backgroundColor='#EC5863'/>
                </div>
                <div className="experts_image_container">
                    <ExpertSvg className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Experts