import React from "react";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    setVisiblePageBtn,
    setLoading,
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
                    isLoading={this.props.isLoading}
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
        isLoading: state.usersPage.isLoading,
    };
};


const UsersPageContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    setVisiblePageBtn,
    setLoading,
})(UsersContainer);

export default UsersPageContainer;
