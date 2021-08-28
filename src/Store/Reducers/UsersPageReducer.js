const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        {
            id: 1,
            firstName: "Anna",
            secondName: "Gorils",
            photoUrl: "https://dekatop.com/wp-content/uploads/2019/01/people_03.jpg",
            age: 22,
            location: { city: "Kiev", country: "Ukraine" },
            follow: true,
            status: false,
        },
        {
            id: 2,
            firstName: "Viktor",
            secondName: "Botr",
            photoUrl: "https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",
            age: 32,
            location: { city: "Mosscow", country: "Russia" },
            follow: false,
            status: false,
        },
        {
            id: 3,
            firstName: "Kira",
            secondName: "Morzi",
            photoUrl: "https://yablyk.com/wp-content/uploads/2018/03/shakira.jpg",
            age: 45,
            location: { city: "Odessa", country: "Ukraine" },
            follow: true,
            status: true,
        },
    ],
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, follow: true };
                    }
                    return user;
                }),
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, follow: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export const followAC = (id) => {
    return { type: FOLLOW, id };
};
export const unFollowAC = (id) => {
    return { type: UN_FOLLOW, id };
};
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};
export default UsersPageReducer;
