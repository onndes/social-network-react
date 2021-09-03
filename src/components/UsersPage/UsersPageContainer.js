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
                {
                    withCredentials: true,
                },
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

        const countPage = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        if (countPage > 7) {
            if (page < 5) {
                this.props.setVisiblePageBtn([0, 7]);
            } else if (page > countPage - 4) {
                this.props.setVisiblePageBtn([countPage - 7, countPage]);
            } else {
                this.props.setVisiblePageBtn([page - 4, page + 3]);
            }
        } else {
            this.props.setVisiblePageBtn([0, countPage]);
        }

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                },
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setLoading(false);
            });
    };

    render() {
        return (
            <>
                <UsersPage {...this.props} hundleClickBtnPage={this.hundleClickBtnPage} />
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
