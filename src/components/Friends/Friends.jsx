import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElement = props.FriendsData.map(f => <Friend name={f.friendName} id={f.id}/>)

    return (
        <div className={s.friends}>
            {friendElement}
        </div>
    )
}

export default Friends;