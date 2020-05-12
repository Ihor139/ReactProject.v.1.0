import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    // debugger;
    // let friendElement = props.state.friendsData .map(f => <Friend name={f.name} id={f.id}/>)
    let friendElement = props.state.map(f => <Friend name={f.name} id={f.id}/>)

    return (
        <div className={s.friends}>
            {friendElement}
        </div>
    )
}

export default Friends;