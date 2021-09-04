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
import { usersAPI } from "./../../API/API";
import { toggleButtonFollow } from "./../../Store/Reducers/UsersPageReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
            this.props.setLoading(false);
        });
    }

    hundleClickBtnPage = (page) => {
        const { setLoading, setCurrentPage, setVisiblePageBtn, setUsers } = this.props;

        setLoading(true);
        setCurrentPage(page);

        const countPage = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        if (countPage > 7) {
            if (page < 5) {
                setVisiblePageBtn([0, 7]);
            } else if (page > countPage - 4) {
                setVisiblePageBtn([countPage - 7, countPage]);
            } else {
                setVisiblePageBtn([page - 4, page + 3]);
            }
        } else {
            setVisiblePageBtn([0, countPage]);
        }

        usersAPI.getUsers(page, this.props.pageSize).then((data) => {
            setUsers(data.items);
            setLoading(false);
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
        buttonFollowWork: state.usersPage.buttonFollowWork,
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
    toggleButtonFollow,
})(UsersContainer);

export default UsersPageContainer;
