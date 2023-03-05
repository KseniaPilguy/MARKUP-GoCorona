import {Logo} from "../../assets/svg/Logo";
import Button from "../../shared/Button/Button";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header_container page_container">
                <div className="logo">
                    <Logo className="icon"/>
                    <h1>Go<span>Corona</span></h1>
                </div>
                
                <div className="navigation">
                    <p>HOME</p>
                    <p>FEATURES</p>
                    <p>SUPPORT</p>
                    <p>CONTACT US</p>
                </div>
                <div className="button_wrapper">
                    <div className="burger_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H20" stroke="#4284f4" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M5 17H20" stroke="#4284f4" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M5 7H20" stroke="#4284f4" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <Button title='DOWNLOAD' backgroundColor='#4285F4'/>
                </div>
            </div>
        </div>
    )
}

export default Header