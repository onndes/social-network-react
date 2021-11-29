import React from "react";
import {
    unFollow,
    getUsers,
    getUsersClickBtn,
    follow,
    actions,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { checkGetUsers } from "../../Store/Selectors";
import { compose } from "redux";
import withWindowWidth from "./../../HOC/withWindowWidth";
import { AppStateType } from "../../Store/Store";
import { UsersTypes } from "../../Types/Types";

type MapStatePropsType = {
    currentPage: number;
    pageSize: number;
    totalUserCount: number;
    users: Array<UsersTypes>;
    windowWidth: number;
    visiblePageBtn: Array<number>;
    countBtn: number;
    isLoading: boolean;
    buttonFollowWork: Array<any>;
};

type MapDispathPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void;
    getUsersClickBtn: (page: number, totalUserCount: number, pageSize: number, isGet: any) => void;
    unFollow: (userId: number) => void;
    follow: (userId: number) => void;

    toggleButtonFollow: (toggleButton: any, userId: number) => void;
    setVisiblePageBtn: () => void;
    setCountBtn: () => void;
    setCurrentPage: () => void;
    handleClickBtnPage: () => void;
};

type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispathPropsType & OwnPropsType;

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

const { toggleButtonFollow, setVisiblePageBtn, setCountBtn, setCurrentPage } = actions;
export default compose(
    // <MapStatePropsType, MapDispathPropsType, OwnPropsType, AppStateType>
    // <ReturnType<typeof mapStateToProps>,MapDispathPropsType, OwnPropsType, AppStateType>
    connect(mapStateToProps, {
        unFollow,
        follow,
        getUsers,
        getUsersClickBtn,
        toggleButtonFollow,
        setVisiblePageBtn,
        setCountBtn,
        setCurrentPage,
    }),
    withWindowWidth,
)(UsersContainer);
