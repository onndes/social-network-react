import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import * as axios from "axios";
import { setProfileData, setUserId, isLoading } from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileData(null);
        this.props.isLoading(true);
        // debugger;
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`,
            )
            .then((response) => {
                this.props.setProfileData(response.data);
                this.props.setUserId(response.data.userId);
                this.props.isLoading(false);
            });
    }

    render() {
        // debugger;
        if (!this.props.profile) {
            return <Preloader />;
        }
        return <ProfilePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};
const ProfilePageContainer = connect(mapStateToProps, { setProfileData, setUserId, isLoading })(
    withRouter(ProfileContainer),
);

export default ProfilePageContainer;
