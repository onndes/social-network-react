const SET_PROFILE_DATA = "SET-PROFILE-DATA ";

const initialState = {
    profile: null,
};

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return { ...state, profile: action.profile };
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
export default ProfilePageReducer;
