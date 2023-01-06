import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (<>
            {!this.state.editMode &&
                <span onClick={this.activateEditMode}>
                    {this.props.aboutMe ? this.props.aboutMe : 'No status.'}
                </span>}
            {this.state.editMode &&
                <>
                    <input value={this.props.aboutMe ? this.props.aboutMe : 'No status.'}>
                    </input>
                    <div>
                        <button onClick={this.deActivateEditMode}>Save</button>
                    </div>
                </>
            }
        </>
        )
    }
};

export default Status