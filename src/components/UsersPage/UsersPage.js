import React from "react";
import PreloaderLine from "../../Common/PreloaderLine/PreloaderLine";
import User from "./User/User";
import BtnPage from "./BtnPage/BtnPage";

const UsersPage = (props) => {
    const renderUsersList = () => {
        return props.users.map((user) => {
            return (
                <div key={user.id}>
                    <User
                        user={user}
                        buttonFollowWork={props.buttonFollowWork}
                        follow={props.follow}
                        unFollow={props.unFollow}
                    />
                </div>
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

            {props.isLoading ? <PreloaderLine /> : renderUsersList()}
        </>
    );
};

export default UsersPage;
