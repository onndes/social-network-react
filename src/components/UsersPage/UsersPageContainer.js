import React from "react";
import {
    unFollow,
    toggleButtonFollow,
    getUsers,
    getUsersClickBtn,
    follow,
    setVisiblePageBtn,
    setCountBtn,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { checkGetUsers } from "../../Store/Selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this postpone in component BtnPage (start)
        // this.props.setCountBtn(7);
        // this.props.setVisiblePageBtn([0, 7]);
        // this postpone in component BtnPage (end)
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
        users: checkGetUsers(state),
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        visiblePageBtn: state.usersPage.visiblePageBtn,
        isLoading: state.usersPage.isLoading,
        buttonFollowWork: state.usersPage.buttonFollowWork,
        countBtn: state.usersPage.countBtn,
    };
};

const UsersPageContainer = connect(mapStateToProps, {
    unFollow,
    toggleButtonFollow,
    getUsers,
    getUsersClickBtn,
    follow,
    setVisiblePageBtn,
    setCountBtn,
})(UsersContainer);

export default UsersPageContainer;
