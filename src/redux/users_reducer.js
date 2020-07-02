const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT';

let initState = {
    users: [],
    currentPage: 1,
    pageSize: 50,
    totalUserCount: 0,
};

let UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        }
        case SETUSERS: {
            // debugger;
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            // debugger;
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_COUNT: {
            // debugger;
            return {
                ...state,
                totalUserCount: action.count,
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});

export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SETUSERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount});

export default UsersReducer;