const SET_PROFILE_DATA = "SET-PROFILE-DATA ";
const SET_USER_ID = "SET-USER-ID";
const IS_LOADING = "IS-LOADING";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
    profile: null,
    userId: null,
    isLoading: true,
    userStatus: null,
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return { ...state, profile: action.profile };
        case SET_USER_ID:
            return { ...state, userId: action.userId };
        case IS_LOADING:
            return { ...state, isLoading: action.loading };
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus };
        default:
            return state;
    }
};

export const setProfileData = (profile) => {
    return {
        type: SET_PROFILE_DATA,
        profile,
    };
};

export const setUserId = (userId) => {
    return {
        type: SET_USER_ID,
        userId,
    };
};
export const isLoading = (loading) => {
    return {
        type: IS_LOADING,
        loading,
    };
};
export const setUserStatus = (userStatus) => {
    
    return {
        type: SET_USER_STATUS,
        userStatus,
    };
};
export default ProfilePageReducer;
