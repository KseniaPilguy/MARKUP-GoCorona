import {MobileSvg} from "../../assets/svg/MobileSvg"
import Button from "../../shared/Button/Button";

const Mobile = () => {
    return (
        <div className="mobile_container page_container">
            <div className="mobile_image_container">
                <MobileSvg className="icon"/>
            </div>
            <div className="mobile_title_container title_container">
                <h1>Stay safe with<br/>Go<span>Corona.</span></h1>
                <p>24x7 Support and user friendly mobile platform to bring<br/>healthcare to your fingertips. Signup and
                    be
                    a part of the new health culture.</p>
                <Button title='FEATURES' backgroundColor='#EC5863'/>
            </div>
        </div>
    )
}

export default Mobile