interface ButtonI {
    title: string;
    backgroundColor?: string;
}

const Button = ({title, backgroundColor = '#EC5863'}: ButtonI) => {
    return (
        <button className="button" style={{backgroundColor: backgroundColor}}>{title}</button>
    )
}

export default Button;
