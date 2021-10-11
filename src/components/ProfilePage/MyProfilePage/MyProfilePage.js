import React, { useState, useEffect } from "react";
import s from "./MyProfilePage.module.css";
import userImg from "../../../assets/img/iconUser.png";
import Status from "./Status/Status";
import ModalFoto from "./ModalFoto/ModalFoto";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileInfo from "./../ProfileInfo/ProfileInfo";
import { NavLink } from "react-router-dom";

const MyProfilePage = (props) => {
    const [modalChangeFoto, setModalChangeFoto] = useState(false);
    const [dataInputFile, setDataInputFile] = useState(null);
    const [photoProfile, setPhotoProfile] = useState(props.profile.photos.large || userImg);
    const [isPhotoSelect, setPhotoSelect] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const onClickSendFoto = () => {
        if (dataInputFile) {
            props.uploadImg(dataInputFile);
            setModalChangeFoto(false);
            setPhotoSelect(false);
            setDataInputFile(null);
        } else {
            setPhotoSelect(true);
        }
    };

    useEffect(() => {
        setPhotoProfile(props.profile.photos.large || userImg);
        const hundleSetWindowWidth = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", hundleSetWindowWidth);
        return () => window.removeEventListener("resize", hundleSetWindowWidth);
    }, [props.profile.photos.large, windowWidth]);

    const renderBlockUserPhoto = () => {
        return (
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
        );
    };
    return (
        <div>
            <div key={props.id} className={s.userWrap}>
                {windowWidth >= 320 && renderBlockUserPhoto()}
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

                    <button className={s.btnModified} type='button'>
                        <NavLink to='/settings/edit-profile-info' activeClassName={s.active}>
                            Modifide my profile info
                        </NavLink>
                    </button>

                    {windowWidth > 576 && <ProfileInfo profile={props.profile} />}
                </div>
                {windowWidth < 320 && renderBlockUserPhoto()}
                <div className={s.infoBockWrapper}>
                    {windowWidth < 576 && <ProfileInfo profile={props.profile} />}
                </div>
            </div>
            {modalChangeFoto && (
                <ModalFoto
                    setDataInputFile={setDataInputFile}
                    onClickSendFoto={onClickSendFoto}
                    dataInputFile={dataInputFile}
                    isPhotoSelect={isPhotoSelect}
                    setPhotoSelect={setPhotoSelect}
                    setModalChangeFoto={setModalChangeFoto}
                />
            )}
        </div>
    );
};

export default MyProfilePage;
