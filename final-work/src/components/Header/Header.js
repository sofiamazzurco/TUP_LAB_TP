import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <div className="div-header">
            <h1 className="title-header">Virtual Library</h1>
            <div className="div-container">
                Autores
            </div>
            <div className="div-container">
                Generos
            </div>
            <div className="div-container">
                Series
            </div>
        </div>
    )    
}

export default Header;