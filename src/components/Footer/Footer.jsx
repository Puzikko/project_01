import React from "react";
import footerStyle from "./Footer.module.css"

const Footer = () => {
    return <div className={footerStyle.footer}>
        <hr></hr>
        <footer>
            <b>Designed by Ihar Zheria and Serhei Zavadskii.</b>
        </footer>
    </div>
};

export default Footer;