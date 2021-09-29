import React from "react";
import MyProfilePage from "./MyProfilePage";
import { connect } from "react-redux";
import {
    isLoading,
    getProfile,
    putStatus,
    uploadImg,
    upadateProfileInfo,
} from "../../../Store/Reducers/ProfilePageReducer";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { checkGetUserStatus, getProfilePage } from "../../../Store/Selectors";
import PreloaderLine from "../../../Common/PreloaderLine/PreloaderLine";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.id);
    }

    render() {
        if (!this.props.profile) {
            return <PreloaderLine />;
        }
        return <MyProfilePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        // use selectors
        profile: getProfilePage(state),
        userStatus: checkGetUserStatus(state),
        isUpdatingMyStatus: state.profilePage.isUpdatingMyStatus,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        isUpdatePhoto: state.profilePage.isUpdatePhoto,
    };
};

export default compose(
    connect(mapStateToProps, {
        isLoading,
        getProfile,
        putStatus,
        uploadImg,
        upadateProfileInfo,
    }),
    withAuthRedirect,
)(MyProfileContainer);
