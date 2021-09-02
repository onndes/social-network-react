import React from "react";
import style from "./UsersPage.module.css";
import userImg from "../../assets/img/iconUser.png";
import Preloader from "../../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

const UsersPage = (props) => {
    const renderUsersList = () => {
        return props.users.map((user) => {
            return (
                <div key={user.id} className={style.userWrapp}>
                    <div className={style.firstCol}>
                        <NavLink to={`/profile/${user.id}`}>
                            <div className={style.imgContainer}>
                                <img
                                    src={user.photos.small !== null ? user.photos.small : userImg}
                                    alt=''
                                />
                            </div>
                        </NavLink>
                        <div className={style.btnContainer}>
                            {user.follow ? (
                                <button
                                    className={style.unfollow + " " + style.btnFollow}
                                    onClick={() => props.unFollow(user.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className={style.follow + " " + style.btnFollow}
                                    onClick={() => props.follow(user.id)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={style.secondCol}>
                        <div className={style.nameAndOnlineBox}>
                            <p className={style.titleName}>
                                {`${user.name} ${user.secondName ? user.secondName : ""}`}
                                {}
                            </p>
                            {user.status ? (
                                <p className={style.statusOnline + " " + style.status}>Online</p>
                            ) : (
                                <p className={style.statusOffline + " " + style.status}>Offline</p>
                            )}
                        </div>
                        <p className={style.titleLocation}>
                            {"user.location.city"}, {"user.location.country"}
                        </p>
                    </div>
                </div>
            );
        });
    };
    const countPage = Math.ceil(props.totalUserCount / props.pageSize);

    const renderBtnPageUsers = () => {
        const arrPageCount = [];
        for (let i = 1; i <= countPage; i++) {
            arrPageCount.push(i);
        }

        const selectArrPageCount = arrPageCount.slice(
            props.visiblePageBtn[0],
            props.visiblePageBtn[1],
        );

        return selectArrPageCount.map((i) => {
            return (
                <div
                    key={i}
                    onClick={() => props.hundleClickBtnPage(i)}
                    className={
                        props.currentPage === i ? style.btnPageUsersActive : style.btnPageUsers
                    }>
                    <div className={style.btnCurrentPage}>{i}</div>
                </div>
            );
        });
    };

    return (
        <div className={style.Wrapper}>
            <div className={style.btnUserPageBox}>
                <div onClick={() => props.hundleClickBtnPage(1)} className={style.FLBtn}>
                    First page
                </div>
                {renderBtnPageUsers()}
                <div onClick={() => props.hundleClickBtnPage(countPage)} className={style.FLBtn}>
                    Last page
                </div>
            </div>
            {props.isLoading ? <Preloader /> : renderUsersList()}
        </div>
    );
};

export default UsersPage;
