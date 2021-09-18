import React from "react";
import MyProfilePage from "./MyProfilePage";
import { connect } from "react-redux";
import { isLoading, getProfile, putStatus } from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import withAuthRedirect from "./../../HOC/withAuthRedirect";
import { compose } from "redux";
import { checkGetUserStatus, getProfilePage } from "../../Store/Selectors";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.id);
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />;
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
    };
};

export default compose(
    connect(mapStateToProps, {
        isLoading,
        getProfile,
        putStatus,
    }),
    withAuthRedirect,
)(MyProfileContainer);
