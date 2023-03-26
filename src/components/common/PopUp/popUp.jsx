import React from "react";
import popupStyle from './popUp.module.css'

export const Popup = ({ text, closePopup }) => {
    return (
        <div className={popupStyle.popupContainer}>
            <div className={popupStyle.popupBody}>
                <h1>{text}</h1>
                <button onClick={closePopup}>Close X</button>
            </div>
        </div>
    );
};