import React from "react";
import popupStyle from './popUp.module.css'

export const Popup = ({ text, closePopup }) => {
    return (
        <div className={popupStyle.popupContainer}>
            <div className={popupStyle.popupBody}>
                <h2>Error:</h2>
                <p>{text}</p>
                <button onClick={closePopup}>Close X</button>
            </div>
        </div>
    );
};