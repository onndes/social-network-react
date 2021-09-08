import React from "react";
import {
    unFollow,
    toggleButtonFollow,
    getUsers,
    getUsersClickBtn,
    follow,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    handleClickBtnPage = (page) => {
        this.props.getUsersClickBtn(page, this.props.totalUserCount, this.props.pageSize);
    };

    render() {
        return (
            <>
                <UsersPage {...this.props} handleClickBtnPage={this.handleClickBtnPage} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        visiblePageBtn: state.usersPage.visiblePageBtn,
        isLoading: state.usersPage.isLoading,
        buttonFollowWork: state.usersPage.buttonFollowWork,
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    unFollow,
    toggleButtonFollow,
    getUsers,
    getUsersClickBtn,
    follow,
})(UsersContainer);

export default UsersPageContainer;
