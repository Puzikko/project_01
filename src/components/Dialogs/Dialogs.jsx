import React from 'react';
import classDialogs from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                    <div className={classDialogs.dialog}>
                        <NavLink to='/dialogs/1'>Serega</NavLink>
                    </div>
                    <div className={classDialogs.dialog}>
                        <NavLink to='/dialogs/2'>Valenta</NavLink>
                        </div>
                    <div className={classDialogs.dialog}>
                        <NavLink to='/dialogs/3'>Antony</NavLink>
                        </div>
                    <div className={classDialogs.dialog}>
                        <NavLink to='/dialogs/4'>Davy Jones</NavLink>
                        </div>
                    <div className={classDialogs.dialog}>
                        <NavLink to='/dialogs/5'>Sharky</NavLink>
                        </div>
                </div>
                <div className={classDialogs.userMessages}>
                    <div>WTF?</div>
                    <div>Wassssup?</div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs