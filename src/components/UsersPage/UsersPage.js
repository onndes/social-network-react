import React from "react";
import style from "./UsersPage.module.css";
import * as axios from "axios";
import userImg from "../../assets/img/iconUser.png";

class UsersPage extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    renderUsersList = () => {
        return this.props.usersPage.users.map((user) => {
            return (
                <div key={user.id} className={style.userWrapp}>
                    <div className={style.firstCol}>
                        <div className={style.imgContainer}>
                            <img
                                src={user.photos.small !== null ? user.photos.small : userImg}
                                alt=''
                            />
                        </div>
                        <div className={style.btnContainer}>
                            {user.follow ? (
                                <button
                                    className={style.unfollow + " " + style.btnFollow}
                                    onClick={() => this.props.unFollow(user.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className={style.follow + " " + style.btnFollow}
                                    onClick={() => this.props.follow(user.id)}>
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

    hundleClickBtnPage = (page) => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(page);
            });
    };

    renderBtnPageUsers = () => {
        const countPage = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        const arrPageCount = [];
        for (let i = 1; i <= countPage; i++) {
            arrPageCount.push(i);
        }
        const arrPageCountTemp = [1, 2, 3, 4];
        return arrPageCountTemp.map((i) => {
            return (
                <div
                    onClick={() => this.hundleClickBtnPage(i)}
                    className={
                        this.props.currentPage === i ? style.btnPageUsersActive : style.btnPageUsers
                    }>
                    {i}
                </div>
            );
        });
    };

    render() {
        return (
            <div className={style.Wrapper}>
                <div className={style.btnUserPageBox}>{this.renderBtnPageUsers()}</div>
                {this.renderUsersList()}
            </div>
        );
    }
}

export default UsersPage;
