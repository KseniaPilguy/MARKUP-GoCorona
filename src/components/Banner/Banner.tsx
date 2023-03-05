import {BannerSvg} from "../../assets/svg/BannerSvg";
import Button from "../../shared/Button/Button";
import Video from "../Video/Video";

const Banner = () => {
    return (
        <div className="banner_container page_container">
            <div className="video_banner">
                <div className="banner_title_container title_container">
                    <h1>Take care of yours <br/> family’s <span>health.</span></h1>
                    <p>All in one destination for COVID-19 health queries. <br/> Consult 10,000+ health workers about
                        your
                        concerns.</p>
                    <Button title='GET STARTED' backgroundColor='#EC5863'/>
                </div>
                <Video />
            </div>
            <div className="banner_image_container">
                <BannerSvg className="icon"/>
            </div>
            <div className="colored_container"/>
        </div>

    )
}

export default Banner