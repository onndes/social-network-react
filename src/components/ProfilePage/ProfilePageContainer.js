import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import * as axios from "axios";
import { setProfileData } from "../../Store/Reducers/ProfilePageReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((response) => {
          setProfileData(response.data.item);
        });
    }

    render() {
        return <ProfilePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};
const ProfilePageContainer = connect(mapStateToProps, { setProfileData })(ProfileContainer);

export default ProfilePageContainer;
