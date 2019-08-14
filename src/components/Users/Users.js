import React from 'react';
import UserItem from "./users-part/UserItem";
import './../../styles/Users.scss';
import * as axios from 'axios';

class Users extends React.Component {

    getUsers = () => {
        axios.get ('https://social-network.samuraijs.com/api/1.0/users')
            .then (res => this.props.setUsers (res.data.items));
    };

    componentDidMount() {
        this.getUsers();
    }


    render() {
        return (
            <div className="app-content">
                {this.props.users.map(user => {
                    return <UserItem key={user.id}
                                     fullName={user.name}
                                     userLogo={user.photos.small}
                                     status={user.status}
                                     location={user.location}
                                     subscribe={user.followed}
                    />
                })}
            </div>
        );
    }

}

export default Users;