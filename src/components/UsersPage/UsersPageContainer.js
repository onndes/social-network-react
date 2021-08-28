import { followAC, unFollowAC, setUsersAC } from "../../Store/Reducers/UsersPageReducer";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
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
    };
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;
