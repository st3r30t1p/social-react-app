import React from 'react';

class ProfileStatus extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            editMode: false,
            status: this.props.status
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
        this.props.updateUserStatusThunk(this.state.status);
    };
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render () {
        return (
            <div>
                {!this.state.editMode && <span onClick={this.onSetStatus}>{this.props.status || 'not status'}</span>}
                {this.state.editMode && <div>
                    <input type="text" autoFocus={true} onBlur={this.onOutStatus} onChange={this.onChangeStatus} value={this.state.status}/>
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;