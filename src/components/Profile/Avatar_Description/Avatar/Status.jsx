import React, { useState } from "react";

const Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => { setEditMode(true) };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.putUserStatusOnServer(status)
    };
    const onChangeBody = (e) => { setStatus(e.target.value) };

    return (<>
        {!editMode &&
            <span onDoubleClick={activateEditMode}>
                {props.status !== null ? props.status : 'No status.'}
            </span>}
        {editMode &&
            <>
                <input value={status !== null ? status : 'No status.'}
                    onChange={onChangeBody} >
                </input>
                <div>
                    <button onClick={deActivateEditMode}>Save</button>
                </div>
            </>
        }
    </>
    );

};

export default Status