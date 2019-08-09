import React from 'react';
const ProfileInfo = () => {
    return (
        <div className="info-profile">
            <div className="avatar-profile">
                <img src="https://i.pinimg.com/originals/19/43/18/19431859261e12c5ba63da8f57b776ee.jpg" alt="photo"/>
            </div>
            <div className="info">
                <div className="username">
                    Jhon Doe
                </div>
                <div className="block-name">
                    Profile info
                </div>
                <div className="user-info">
                    <div>Date of birth: <b>23/12/1992</b></div>
                    <div>City: <b>Las Vegas</b></div>
                    <div>Country: <b>USA</b></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est eveniet ex maxime nemo reprehenderit sit veritatis?
                        Accusamus dolores est, iusto laboriosam,
                        laudantium minima nesciunt nihil quis rem repellendus sint voluptates!</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;