import React from 'react';
import classDialogs from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={classDialogs.homePage}>
                <div className={classDialogs.userDialogs}>
                    <div className={classDialogs.dialog + ' ' + classDialogs.active}>Serega</div>
                    <div className={classDialogs.dialog}>Valenta</div>
                    <div className={classDialogs.dialog}>Antony</div>
                    <div className={classDialogs.dialog}>Davy Jones</div>
                    <div className={classDialogs.dialog}>Sharky</div>
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