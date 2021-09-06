import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { isLoading, getProfile } from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
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
    isLoading,
    getProfile,
})(withRouter(ProfileContainer));

export default ProfilePageContainer;
