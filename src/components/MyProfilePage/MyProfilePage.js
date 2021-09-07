import React from "react";
import style from "./MyProfile.module.css";
import userImg from "../../assets/img/iconUser.png";
import Status from "./Status/Status";
const MyProfile = (props) => {
    // console.log(props);
    // debugger;
    if (props.profile === null) return <div>no props</div>;
    return (
        <div>
            <div key={props.id} className={style.userWrapp}>
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
                        {/* {myData.follow ? (
                            <button className={style.unfollow + " " + style.btnFollow}>
                                Unfollow
                            </button>
                        ) : (
                            <button className={style.follow + " " + style.btnFollow}>Follow</button>
                        )} */}
                    </div>
                </div>
                <div className={style.secondCol}>
                    <div className={style.nameAndOnlineBox}>
                        <p className={style.titleName}>{props.profile.fullName}</p>
                        {props.userStatus ? (
                            <p className={style.statusOnline + " " + style.status}>Online</p>
                        ) : (
                            <p className={style.statusOffline + " " + style.status}>Offline</p>
                        )}
                    </div>
                    <div className={style.userStatus}>
                        <Status status={props.userStatus ? props.userStatus : "no status"} />
                    </div>
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
export default MyProfile;
