import React from 'react';
import Logo from "../../images/logo.png";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={Logo} width={150} alt=""/>
            </div>
        </header>
    );
}
export default  Header;