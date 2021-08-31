import React from "react";
import {
    followAC,
    unFollowAC,
    setUsersAC,
    CurrentPageAC,
    setTotalUsersAC,
    setVisiblePageBtnAC,
    loadingAC,
} from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                this.props.setLoading(false);
            });
    }

    hundleClickBtnPage = (page) => {
        this.props.setLoading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
                this.props.setLoading(false);
            });
    };

    render() {
        return (
            <>
                <UsersPage
                    usersPage={this.props.usersPage}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    hundleClickBtnPage={this.hundleClickBtnPage}
                    loading={this.props.loading}
                />
            </>
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
        loading: state.usersPage.loading,
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
            return dispatch(CurrentPageAC(currentPage));
        },
        setTotalUsers: (totalUsers) => {
            return dispatch(setTotalUsersAC(totalUsers));
        },
        setVisiblePageBtn: (visiblePageBtn) => {
            return dispatch(setVisiblePageBtnAC(visiblePageBtn));
        },
        setLoading: (load) => {
            return dispatch(loadingAC(load));
        },
    };
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersPageContainer;
