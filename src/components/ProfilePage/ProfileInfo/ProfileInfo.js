import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = ({ profile }) => {
    const contacts = Object.keys(profile.contacts).map((title) => {
        return (
            <div key={title} className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>{title}: </p>
                <p className={s.descriptionPI}>{profile["title"] || "-"}</p>
            </div>
        );
    });

    return (
        <div className={s.wrappProfileInfoPI}>
            {/* <div className={s.wrapTitleInfoPI}>
              <p className={s.titlePI}>Full name: </p>
              <p className={s.descriptionPI}>{profile.fullName}</p>
          </div> */}
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>About me: </p>
                <p className={s.descriptionPI}>{profile.aboutMe || "-"}</p>
            </div>
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>Looking for a job: </p>
                <p className={s.descriptionPI}>{profile.lookingForAJob ? "yes" : "no"}</p>
            </div>
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>What work I'm looking for: </p>
                <p className={s.descriptionPI}>{profile.lookingForAJobDescription || "-"}</p>
            </div>
            {/* Contacts block start */}
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>Contacts: </p>
            </div>
            <div className={s.wrapTitleInfoPI_contacts}>{contacts}</div>
            {/* Contacts block end */}
        </div>
    );
};
export default ProfileInfo;
