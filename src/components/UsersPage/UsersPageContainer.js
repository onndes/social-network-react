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

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;
