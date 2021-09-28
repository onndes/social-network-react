import React, { useState, useEffect } from "react";
import s from "./MyProfilePage.module.css";
import userImg from "../../../assets/img/iconUser.png";
import Status from "./Status/Status";
import ModalFoto from "./ModalFoto/ModalFoto";
import Preloader from "../../../Common/Preloader/Preloader";

const MyProfile = (props) => {
    const [modalChangeFoto, setModalChangeFoto] = useState(false);
    const [dataInputFile, setDataInputFile] = useState();
    const [photoProfile, setPhotoProfile] = useState(props.profile.photos.large || userImg);

    const onClickSendFoto = () => {
        props.uploadImg(dataInputFile);
        setModalChangeFoto(false);
    };

    useEffect(() => {
        setPhotoProfile(props.profile.photos.large || userImg);
    }, [props.profile, props.isUpdatePhoto]);

    return (
        <div>
            <div key={props.id} className={s.userWrap}>
                <div className={s.firstCol}>
                    <div className={s.imgContainer}>
                        <img src={photoProfile} alt='' />
                        {props.isUpdatePhoto && (
                            <div className={s.preloader}>
                                <Preloader />
                            </div>
                        )}
                    </div>
                    <div className={s.btnContainer}>
                        {props.isUpdatePhoto ? (
                            <button className={s.btnEditMyProfile + " " + s.btnEditMyProfileOff}>
                                Change photo
                            </button>
                        ) : (
                            <button
                                className={s.btnEditMyProfile}
                                onClick={() => setModalChangeFoto(true)}>
                                Change photo
                            </button>
                        )}
                    </div>
                </div>
                <div className={s.secondCol}>
                    <div className={s.nameAndOnlineBox}>
                        <p className={s.titleName}>{props.profile.fullName}</p>
                        <p className={s.statusOnline + " " + s.status}>Online</p>
                    </div>
                    <div className={s.userStatus}>
                        <Status
                            putStatus={props.putStatus}
                            status={props.userStatus}
                            isUpdatingMyStatus={props.isUpdatingMyStatus}
                        />
                    </div>
                    <p className={s.aboutMe}>
                        <span>About me: </span>
                        {props.profile.aboutMe ? props.profile.aboutMe : "no data"}
                    </p>
                    <div className={s.aboutUserWrapper}>
                        <ul className={s.aboutUserListTitle}>
                            <li className={s.aboutUserItemTitle}>Birthday:</li>
                            <li className={s.aboutUserItemTitle}>Town:</li>
                            <li className={s.aboutUserItemTitle}>Photos:</li>
                        </ul>
                        <ul className={s.aboutUserList}>
                            <li className={s.aboutUserItem}>[hardcode]</li>
                            <li className={s.aboutUserItem}>[hardcode]</li>
                            <li className={s.aboutUserItem}>[hardcode]</li>
                        </ul>
                    </div>
                </div>
            </div>
            {modalChangeFoto && (
                <ModalFoto setDataInputFile={setDataInputFile} onClickSendFoto={onClickSendFoto} />
            )}
        </div>
    );
};
export default MyProfile;
