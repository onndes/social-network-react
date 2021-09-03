import React from "react";
import style from "./Profile.module.css";
import userImg from "../../assets/img/iconUser.png";
const Profile = (props) => {
    const myData = {
        name: "User Name",
        id: 19397,
        uniqueUrlName: null,
        photos: {
            small: null,
            large: null,
        },
        status: null,
        followed: false,
    };

    return (
        <div>
            <div key={myData.id} className={style.userWrapp}>
                <div className={style.firstCol}>
                    <div className={style.imgContainer}>
                        <img
                            src={
                                props.profile.photos.small !== null
                                    ? props.profile.photos.small
                                    : userImg
                            }
                            alt=''
                        />
                    </div>
                    <div className={style.btnContainer}>
                        {myData.follow ? (
                            <button className={style.unfollow + " " + style.btnFollow}>
                                Unfollow
                            </button>
                        ) : (
                            <button className={style.follow + " " + style.btnFollow}>Follow</button>
                        )}
                    </div>
                </div>
                <div className={style.secondCol}>
                    <div className={style.nameAndOnlineBox}>
                        <p className={style.titleName}>
                            {`${props.profile.fullName} ${
                                myData.secondName ? myData.secondName : ""
                            }`}
                        </p>
                        {myData.status ? (
                            <p className={style.statusOnline + " " + style.status}>Online</p>
                        ) : (
                            <p className={style.statusOffline + " " + style.status}>Offline</p>
                        )}
                    </div>
                    <p className={style.userStatus}>
                        {props.userStatus ? props.userStatus : "no data"}
                    </p>
                    <p className={style.aboutMe}>
                        <span>About me: </span>
                        {props.profile.aboutMe ? props.profile.aboutMe : "no data"}
                    </p>
                    <div className={style.aboutUserWrapper}>
                        <ul className={style.aboutUserListTitle}>
                            <li className={style.aboutUserItemTitle}>Birthday:</li>
                            <li className={style.aboutUserItemTitle}>Town:</li>
                            <li className={style.aboutUserItemTitle}>Photos:</li>
                        </ul>
                        <ul className={style.aboutUserList}>
                            <li className={style.aboutUserItem}>[hardcode]</li>
                            <li className={style.aboutUserItem}>[hardcode]</li>
                            <li className={style.aboutUserItem}>[hardcode]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
