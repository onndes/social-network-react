import React from "react";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    setVisiblePageBtn,
    setLoading,
    setCurrentPagePrew,
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
        this.props.setCurrentPage(page);
        this.props.setCurrentPagePrew(this.props.currentPage);

        if (page) {
            if (page < 5) {
                this.props.setVisiblePageBtn([0, 7]);
            } else {
                this.props.setVisiblePageBtn([page - 4, page + 3]);
            }
        }

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
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
                    visiblePageBtn={this.props.visiblePageBtn}
                    currentPagePrew={this.props.currentPagePrew}
                    setVisiblePageBtn={this.props.setVisiblePageBtn}
                    setCurrentPage={this.props.setCurrentPage}
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
        currentPagePrew: state.usersPage.currentPagePrew,
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
    setCurrentPagePrew,
})(UsersContainer);

export default UsersPageContainer;
