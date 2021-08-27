import React from "react";
import style from "./UsersPage.module.css";

const UsersPage = (props) => {
    // debugger;
    const renderUsersList = () => {
        return props.usersPage.users.map((user) => {
            return (
                <div key={user.id} className={style.userWrapp}>
                    <div className={style.firstCol}>
                        <div className={style.imgContainer}>
                            <img src={user.photoUrl} alt='' />
                        </div>
                        <div className={style.btnContainer}>
                            {user.follow ? (
                                <button
                                    className={style.unfollow + " " + style.btnfollow}
                                    onClick={() => props.unFollow(user.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className={style.follow + " " + style.btnfollow}
                                    onClick={() => props.follow(user.id)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={style.secondCol}>
                        <div className={style.nameAndOnlineBox}>
                            <p className={style.titleName}>
                                {user.firstName + " " + user.secondName}
                                {}
                            </p>
                            {user.status ? (
                                <p className={style.statusOnline + " " + style.status}>Online</p>
                            ) : (
                                <p className={style.statusOffline + " " + style.status}>Offline</p>
                            )}
                        </div>
                        <p className={style.titleLocation}>
                            {user.location.city}, {user.location.country}
                        </p>
                    </div>
                </div>
            );
        });
    };
    return <div className={style.Wrapper}>{renderUsersList()}</div>;
};

export default UsersPage;
