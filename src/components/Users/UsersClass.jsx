import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import user_default from '../../assets/images/user_default.png'

class Users extends React.Component {
    // если конструктор прокидываеть только пропсы, то конструктор не используют
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {    //endpoint
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    onPageChange =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {    //endpoint
                // debugger;
                this.props.setUsers(response.data.items);
            });
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (<div>
            <div>
                {pages.map(p => {
                    return <button className={this.props.currentPage === p && s.selectPage} onClick={(e) => {
                        this.onPageChange(p);
                    }}>{p}</button>
                })}
            </div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                this.props.users.map(u => <div className={s.user} key={u.id}>
                    <div className={s.avatar}>
                        <div>
                            <img className={s.image} src={u.photos.small != null ? u.photos.small : user_default}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollowAC(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.followAC(u.id)
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
                </div>)}
        </div>)
    }
}

export default Users;