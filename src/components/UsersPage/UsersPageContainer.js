import React from "react";
import {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setVisiblePageBtnAC,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    hundleClickBtnPage = (page) => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            });
    };

    render() {
        return (
            <UsersPage
                usersPage={this.props.usersPage}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                hundleClickBtnPage={this.hundleClickBtnPage}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        visiblePageBtn: state.usersPage.visiblePageBtn,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            return dispatch(followAC(id));
        },
        unFollow: (id) => {
            return dispatch(unFollowAC(id));
        },
        setUsers: (users) => {
            return dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            return dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsers: (totalUsers) => {
            return dispatch(setTotalUsersAC(totalUsers));
        },
        setVisiblePageBtn: (visiblePageBtn) => {
            return dispatch(setVisiblePageBtnAC(visiblePageBtn));
        },
    };
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersPageContainer;
