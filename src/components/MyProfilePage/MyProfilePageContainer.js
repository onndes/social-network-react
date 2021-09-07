import React from "react";
import MyProfilePage from "./MyProfilePage";
import { connect } from "react-redux";
import { isLoading, getProfile } from "../../Store/Reducers/ProfilePageReducer";
import Preloader from "../../Common/Preloader/Preloader";
import withAuthRedirect from "./../../HOC/withAuthRedirect";
import {compose} from "redux"
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
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    };
};


export default compose(
    connect(mapStateToProps, {
        isLoading,
        getProfile,
    }),
    withAuthRedirect,
)(MyProfileContainer);
