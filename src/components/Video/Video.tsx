import play from "../../assets/play.png";

const Video = () => {
    return (
        <div className="video_container">
            <a>
                <img src={play} alt="play"/>
            </a>
            <div className="text">
                <p>Stay safe with GoCorona</p>
                <h5>Watch Video</h5>
            </div>
        </div>
    )
}

export default Video