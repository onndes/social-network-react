import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import {
    setProfileData,
    setUserId,
    isLoading,
    setUserStatus,
} from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../API/API";
class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileData(null);
        this.props.isLoading(true);

        profileAPI.getProfile(this.props.match.params.userId).then((data) => {
            this.props.setProfileData(data);
            this.props.setUserId(data.userId);
            this.props.isLoading(false);
        });

        profileAPI.getProfileStatus(this.props.match.params.userId).then((data) => {
                this.props.setUserStatus(data);
            });
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />;
        }
        return <ProfilePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
    };
};
const ProfilePageContainer = connect(mapStateToProps, {
    setProfileData,
    setUserId,
    isLoading,
    setUserStatus,
})(withRouter(ProfileContainer));

export default ProfilePageContainer;
