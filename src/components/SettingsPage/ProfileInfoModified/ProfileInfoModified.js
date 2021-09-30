import s from "./ProfileInfoModified.module.css";
import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../Common/CastomFrom/CustomFrom";
import PreloaderLine from "../../../Common/PreloaderLine/PreloaderLine";
const ProfileModified = ({ profileUser, handleSubmit, error }) => {
    const [profile, setProfile] = useState(profileUser);

    useEffect(() => {
        setProfile(profileUser);
    }, [profileUser]);

    if (!profile) return <PreloaderLine />;
    const contacts = Object.keys(profile.contacts).map((title) => {
        return (
            <div key={title} className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>{title}: </p>
                <Field className={s.descriptionPI} component={Input} name={`profile.${title}`} />
            </div>
        );
    });

  

    return (
        <form onSubmit={handleSubmit} className={s.wrappProfileInfoPI}>
            {error && (
                <div className={s.errorBox}>
                    <p className={s.errorText}>{error}</p>
                </div>
            )}
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>*Full name: </p>
                <Field className={s.descriptionPI} component={Input} name={"fullName"} />
            </div>
            <div className={s.wrapTitleInfoPI}>
                <label className={s.titlePI}>*About me: </label>
                <Field className={s.descriptionPI} component={Input} name={"aboutMe"} />
            </div>
            <div className={s.wrapTitleInfoPI}>
                <label className={s.titlePI}>*Looking for a job: </label>
                <Field
                    className={s.descriptionPI}
                    component={Input}
                    type={"checkbox"}
                    name={"lookingForAJob"}
                />
            </div>
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>*What work I'm looking for: </p>
                <Field
                    className={s.descriptionPI}
                    component={Input}
                    name={"lookingForAJobDescription"}
                />
            </div>
            {/* Contacts block start */}
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>Contacts: </p>
            </div>
            <div className={s.wrapTitleInfoPI_contacts}>{contacts}</div>
            {/* Contacts block end */}
            <button className={s.btnModifiedSave}>Update profile</button>
        </form>
    );
};

const ProfileInfoModified = reduxForm({ form: "modifiedProfile" })(ProfileModified);

export default ProfileInfoModified;
