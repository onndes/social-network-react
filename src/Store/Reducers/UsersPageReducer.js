const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";

const initialState = {
    users: [
        {
            id: 1,
            firstName: "Anna",
            secondName: "Gorils",
            photoUrl:
                "https://im0-tub-ua.yandex.net/i?id=577dcb3c36b8b52c76113c95d01c6534&n=13&exp=1",
            age: 22,
            location: { city: "Kiev", country: "Ukraine" },
            follow: true,
            status: false,
        },
        {
            id: 2,
            firstName: "Viktor",
            secondName: "Botr",
            photoUrl:
                "https://im0-tub-ua.yandex.net/i?id=6b405c17a174bbb37109690cd7adb9a7&n=13&exp=1",
            age: 32,
            location: { city: "Mosscow", country: "Russia" },
            follow: false,
            status: false,
        },
        {
            id: 3,
            firstName: "Kira",
            secondName: "Morzi",
            photoUrl:
                "https://im0-tub-ua.yandex.net/i?id=2d72bf962a85f97e1eb2e3d6d755ff2c&n=13&exp=1",
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
        default:
            return state;
    }
};

export const followAC = (id) => {
    return { type: FOLLOW, id: id };
};
export const unFollowAC = (id) => {
    return { type: UN_FOLLOW, id: id };
};
export default UsersPageReducer;
