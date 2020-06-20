import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import user_default from '../../assets/images/user_default.png'

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                // debugger;
                this.props.setUsers(response.data.items);
            });
        }
    }

    render = () => <div>
        <button onClick={this.getUsers}>Get users</button>
        {
            this.props.users.map(u => <div className={s.user} key={u.id}>
                <div className={s.avatar}>
                    <div>
                        <img className={s.image} src={u.photos.small != null ? u.photos.small : user_default}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unfollowAC(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.followAC(u.id) }}>Follow</button>}
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
            </div>)}
    </div>
}

export default Users;