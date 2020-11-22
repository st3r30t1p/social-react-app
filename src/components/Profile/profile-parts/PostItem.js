import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post-item">
            <div className="author-posted">
                <div className="author-photo">
                    <img src="https://i.pinimg.com/originals/19/43/18/19431859261e12c5ba63da8f57b776ee.jpg" alt=""/>
                </div>
                <div className="author-name">
                    <b>Jhon Doe</b>
                </div>
                <div className="date-post">
                    12:23 23/11/2019
                </div>
            </div>
           <div className="text-post">
               {props.body}
           </div>
        </div>
    );
};

export default PostItem;