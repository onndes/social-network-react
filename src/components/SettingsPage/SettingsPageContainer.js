import React from "react";
import SettingsPage from "./SettingsPage";
import withAuthRedirect from "./../../HOC/withAuthRedirect";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfile, upadateProfileInfo } from "../../Store/Reducers/ProfilePageReducer";

class SettingsPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.profile) {
            if (this.props.userId !== this.props.profile.userId) {
                this.props.getProfile(this.props.userId);
            }
        } else {
            this.props.getProfile(this.props.userId);
        }
    }
    render() {
        return <SettingsPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        profile: state.profilePage.profile,
    };
};

export default compose(
    connect(mapStateToProps, { upadateProfileInfo, getProfile }),
    withAuthRedirect,
)(SettingsPageContainer);
