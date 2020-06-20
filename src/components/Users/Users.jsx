import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import user_default from '../../assets/images/user_default.png'

const Users = (props) => {
    // debugger;

    // заглушка

    // props.setUsers([
    //     {
    //         id: 1,
    //         img: 'https://chpic.su/_data/stickers/j/johnnysinsbrazzers/johnnysinsbrazzers_020.webp',
    //         followed: true, name: "Vasya", status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         img: 'https://s.tcdn.co/2e2/4ca/2e24caad-80c3-3806-bdb6-04c1f296729e/8.png',
    //         followed: false, name: "Grisha", status: "I'm a boss too", location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    //     {
    //         id: 3,
    //         img: 'https://cdn140.picsart.com/313312819216211.png?type=webp&to=min&r=640',
    //         followed: true, name: "Petya", status: "I'm a developper", location: {city: 'Moscow', country: 'Russia'}
    //     },
    // ])

    // запрос с сервера
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                // debugger;
                props.setUsers(response.data.items);
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            props.users.map(u => <div className={s.user} key={u.id}>
            <div className={s.avatar}>
                <div>
                    <img className={s.image} src={u.photos.small != null ? u.photos.small : user_default}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollowAC(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.followAC(u.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div className={s.description}>
                <div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>
                <div>
                    <div>
                        {/*{[u.location.city + ', ' + u.location.country]}*/}
                    </div>
                </div>
            </div>
        </div>
        </div>)
}

export default Users;