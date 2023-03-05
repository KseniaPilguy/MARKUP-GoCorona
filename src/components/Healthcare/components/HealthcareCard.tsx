interface CardI {
    image: any;
    title: string;
    text: string;
}

const HealthcareCard = ({image, title, text}: CardI) => {
    return (
        <div className="healthcare_card">
            <div className="healthcare_card_container">
                <div className="image">
                    <img src={image} alt="image"/>
                </div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default HealthcareCard