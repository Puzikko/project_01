import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
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
        this.props.putUserStatusOnServer(this.state.status)
    }
    onChangeBody = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (<>
            {!this.state.editMode &&
                <span onClick={this.activateEditMode}>
                    {this.props.status !== null ? this.props.status : 'No status.'}
                </span>}
            {this.state.editMode &&
                <>
                    <input value={this.state.status !== null ? this.state.status : 'No status.'}
                        onChange={this.onChangeBody} >
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