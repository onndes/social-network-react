import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import User from "./User/User";
import BtnPage from "./BtnPage/BtnPage";

const UsersPage = (props) => {
    const renderUsersList = () => {
        return props.users.map((user) => {
            return (
                <User
                    user={user}
                    buttonFollowWork={props.buttonFollowWork}
                    follow={props.follow}
                    unFollow={props.unFollow}
                />
            );
        });
    };

    return (
        <>
            <BtnPage
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                visiblePageBtn={props.visiblePageBtn}
                handleClickBtnPage={props.handleClickBtnPage}
                currentPage={props.currentPage}
            />

            {props.isLoading ? <Preloader /> : renderUsersList()}
        </>
    );
};

export default UsersPage;
