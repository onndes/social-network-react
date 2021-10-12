import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = ({ user, ...props }) => {
    const sliceUserName = (userName) => {
        if (userName.length > 12 && props.windowWidth < 420) {
            return userName.slice(0, 12) + "...";
        } else {
            return userName;
        }
    };

    return (
        <div key={user.id} className={s.userWrap}>
            <div className={s.firstCol}>
                <NavLink to={`/profile/${user.id}`}>
                    <div className={s.imgContainer}>
                        <img src={user.photos.small} alt='' />
                    </div>
                </NavLink>
                <div className={s.btnContainer}>
                    {user.followed ? (
                        <button
                            disabled={props.buttonFollowWork.some((i) => i === user.id)}
                            className={s.unfollow + " " + s.btnFollow}
                            onClick={() => {
                                props.unFollow(user.id);
                            }}>
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={props.buttonFollowWork.some((i) => i === user.id)}
                            className={s.follow + " " + s.btnFollow}
                            onClick={() => {
                                props.follow(user.id);
                            }}>
                            Follow
                        </button>
                    )}
                </div>
            </div>
            <div className={s.secondCol}>
                <div className={s.nameAndOnlineBox}>
                    <p className={s.titleName}>
                        {sliceUserName(user.name)}
                        {}
                    </p>
                    {!user.status ? (
                        <p className={s.statusOnline + " " + s.status}>[Online]</p>
                    ) : (
                        <p className={s.statusOffline + " " + s.status}>[Offline]</p>
                    )}
                </div>
                <p className={s.status}>{user.status}</p>
            </div>
        </div>
    );
};

export default User;
