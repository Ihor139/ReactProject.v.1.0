import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.header_img}>
                <img src='https://thumbs.dreamstime.com/t/abstract-technology-concept-industrial-web-header-banner-vector-template-bridge-landscape-circuit-board-gears-79083330.jpg'/>
            </div>
            <div className={s.avatar_description}>
                Avatar
            </div>
        </div>
    )
}

export default ProfileInfo;