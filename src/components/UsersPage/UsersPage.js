import React from "react";
import style from "./UsersPage.module.css";
import * as axios from "axios";
import userImg from "../../assets/img/iconUser.png";

class UsersPage extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            this.props.setUsers(response.data.items);
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
                                    className={style.unfollow + " " + style.btnfollow}
                                    onClick={() => this.props.unFollow(user.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className={style.follow + " " + style.btnfollow}
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
    render() {
        return <div className={style.Wrapper}>{this.renderUsersList()}</div>;
    }
}

export default UsersPage;
