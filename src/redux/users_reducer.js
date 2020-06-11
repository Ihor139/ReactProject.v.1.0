const  FOLLOW = 'FOLLOW';
const  UNFOLLOW = 'UNFOLLOW';

let initState = {
    users:[
        {id:1, followed:true, name:"Vasya",  status:"I'm a boss", location: {city:'Minsk', country:'Belarus'}},
        {id:1, followed:false, name:"Grisha", status:"I'm a boss too", location: {city:'Kiev', country:'Ukraine'}},
        {id:1, followed:true, name:"Petya",  status:"I'm a developper", location: {city:'Moscow', country:'Russia'}},
    ]
};

let UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => u),
                //
                //
                //
                //
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users],
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});

export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
//
//

export default UsersReducer;