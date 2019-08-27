import React from 'react';

class ProfileStatus extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            editMode: false
        };
    }

    onSetStatus = () => {
        this.setState({
            editMode: true
        });
    };
    onOutStatus = () => {
        this.setState({
            editMode: false
        });
    };
    onChangeStatus = (e) => {
      console.log(e.currentTarget.value)
    };

    render () {
        return (
            <div>
                {!this.state.editMode && <span onClick={this.onSetStatus}>{this.props.status}</span>}
                {this.state.editMode && <div>
                    <input type="text" autoFocus={true} onBlur={this.onOutStatus} onChange={this.onChangeStatus} value={this.props.status}/>
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;