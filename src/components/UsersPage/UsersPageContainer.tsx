import React from "react";
import {
    unFollow,
    toggleButtonFollow,
    getUsers,
    getUsersClickBtn,
    follow,
    setVisiblePageBtn,
    setCountBtn,
    setCurrentPage,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { checkGetUsers } from "../../Store/Selectors";
import { compose } from "redux";
import withWindowWidth from "./../../HOC/withWindowWidth";
import { AppStateType } from "../../Store/Store";

type PropsType = {
    currentPage: number;
    pageSize: number;
    totalUserCount: number;
    getUsers: (currentPage: number, pageSize: number) => void;
    getUsersClickBtn: (page: number, totalUserCount: number, pageSize: number, isGet: any) => void;
};

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    handleClickBtnPage = (page: number, isGet: any) => {
        if (page !== this.props.currentPage) {
            this.props.getUsersClickBtn(
                page,
                this.props.totalUserCount,
                this.props.pageSize,
                isGet,
            );
        }
    };

    render() {
        return (
            <>
                <UsersPage {...this.props} handleClickBtnPage={this.handleClickBtnPage} />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
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

export default compose(
    connect(mapStateToProps, {
        unFollow,
        follow,
        toggleButtonFollow,
        getUsers,
        getUsersClickBtn,
        setVisiblePageBtn,
        setCountBtn,
        setCurrentPage,
    }),
    withWindowWidth,
)(UsersContainer);
