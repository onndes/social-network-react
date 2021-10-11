import React from "react";
import style from "./MyProfilePage/MyProfilePage.module.css";
import userImg from "../../assets/img/iconUser.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    const renderBlockUserPhoto = () => {
        return (
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
                    {props.isFollow ? (
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
        );
    };

    return (
        <div>
            <div className={style.userWrap}>
                {props.windowWidth >= 420 && renderBlockUserPhoto()}
                <div className={style.secondCol}>
                    <div className={style.nameAndOnlineBox}>
                        <p className={style.titleName}>{props.profile.fullName}</p>
                        <p className={style.statusOffline + " " + style.status}>[Offline]</p>
                    </div>
                    <p className={style.userStatusN}>
                        {props.userStatus ? props.userStatus : "no status"}
                    </p>
                    {props.windowWidth > 576 && <ProfileInfo profile={props.profile} />}
                </div>
                {props.windowWidth < 420 && renderBlockUserPhoto()}
                <div className={style.infoBockWrapper}>
                    {props.windowWidth < 576 && <ProfileInfo profile={props.profile} />}
                </div>
            </div>
        </div>
    );
};
export default Profile;
