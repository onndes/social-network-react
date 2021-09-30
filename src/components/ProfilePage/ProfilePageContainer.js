import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { isLoading, getProfile, getFollowThisUser } from "../../Store/Reducers/ProfilePageReducer";
// import { isLoading, getProfile, getFollowThisUser } from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
        this.props.getFollowThisUser(this.props.match.params.userId);
    }
    render() {
        if (this.props.match.params.userId === "myprofile") {
            if (!this.props.isAuth) return <Redirect to='/login' />;
        }
        if (!this.props.profile) {
            return <Preloader />;
        }
        return <ProfilePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        follow: state.profilePage.follow,
        userStatus: state.profilePage.userStatus,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    };
};
const ProfilePageContainer = connect(mapStateToProps, {
    isLoading,
    getProfile,
    getFollowThisUser,
})(withRouter(ProfileContainer));

export default ProfilePageContainer;
