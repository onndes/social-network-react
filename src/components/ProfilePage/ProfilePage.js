import React, { useState, useEffect } from "react";
import style from "./Profile.module.css";
import userImg from "../../assets/img/iconUser.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    const [gIsFollow, gSetIsFollow] = useState(props.isFollow);
    useEffect(() => {
        gSetIsFollow(props.isFollow);
    }, [props.isFollow]);
    return (
        <div>
            <div className={style.userWrap}>
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
                        {gIsFollow ? (
                            <button
                                disabled={props.buttonFollowWork.some(
                                    (i) => i === props.profile.userId,
                                )}
                                onClick={() => {
                                    props.unFollow(props.profile.userId);
                                }}
                                className={style.unfollow + " " + style.btnFollow}>
                                Unfollow
                            </button>
                        ) : (
                            <button
                                disabled={props.buttonFollowWork.some(
                                    (i) => i === props.profile.userId,
                                )}
                                onClick={() => {
                                    props.follow(props.profile.userId);
                                }}
                                className={style.follow + " " + style.btnFollow}>
                                Follow
                            </button>
                        )}
                    </div>
                </div>
                <div className={style.secondCol}>
                    <div className={style.nameAndOnlineBox}>
                        <p className={style.titleName}>{props.profile.fullName}</p>
                        <p className={style.statusOffline + " " + style.status}>[Offline]</p>
                    </div>
                    <p className={style.userStatus}>
                        {props.userStatus ? props.userStatus : "no status"}
                    </p>
                    <ProfileInfo profile={props.profile} />
                </div>
            </div>
        </div>
    );
};
export default Profile;
