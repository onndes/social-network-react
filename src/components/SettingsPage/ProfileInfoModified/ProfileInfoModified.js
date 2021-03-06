import s from "./ProfileInfoModified.module.css";
import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../Common/CastomFrom/CustomFrom";
import PreloaderLine from "../../../Common/PreloaderLine/PreloaderLine";
import { requireFillIn } from "../../../Common/Validate/Validate";
const ProfileModified = ({ profileUser, handleSubmit, error }) => {
    const [profile, setProfile] = useState(profileUser);

    useEffect(() => {
        setProfile(profileUser);
    }, [profileUser]);

    if (!profile) return <PreloaderLine />;
    const contacts = Object.keys(profile.contacts).map((title) => {
        return (
            <div key={title} className={s.wrapTitleInfo}>
                <p className={s.title}>{title}: </p>
                <Field
                    className={s.description}
                    component={Input}
                    name={`profile.${title}`}
                />
            </div>
        );
    });

    return (
        <form onSubmit={handleSubmit} className={s.wrappProfileInfo}>
            {error && (
                <div className={s.errorBox}>
                    <p className={s.errorText}>{error}</p>
                </div>
            )}
            <div className={s.wrapTitleInfo}>
                <label className={s.title}>*Full name: </label>
                <Field
                    className={s.description}
                    component={Input}
                    name={"fullName"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={s.wrapTitleInfo}>
                <label className={s.title}>*About me: </label>
                <Field
                    className={s.description}
                    component={Input}
                    name={"aboutMe"}
                    validate={[requireFillIn]}
                />
            </div>
            <div className={s.wrapTitleInfo + " " + s.wrapTitleInfoCheckBox}>
                <label className={s.title + " " + s.titleCheckBox}>*Looking for a job: </label>
                <Field
                    className={s.description + " " + s.descriptionCheckBox}
                    component={Input}
                    type={"checkbox"}
                    name={"lookingForAJob"}
                />
            </div>
            <div className={s.wrapTitleInfo}>
                <label className={s.title}>*What work I'm looking for: </label>
                <Field
                    className={s.description}
                    component={Input}
                    name={"lookingForAJobDescription"}
                    validate={[requireFillIn]}
                />
            </div>
            {/* Contacts block start */}
            <div className={s.wrapTitleInfo}>
                <p className={s.title + " " + s.titleContacts}>Contacts: </p>
                <p className={s.lineBorder}></p>
            </div>
            <div className={s.wrapTitleInfo_contacts}>{contacts}</div>
            {/* Contacts block end */}
            <div className={s.wrapTitleInfo}>
                <div></div>
                <button className={s.btnModifiedSave}>Update profile</button>
            </div>
        </form>
    );
};

const ProfileInfoModified = reduxForm({ form: "modifiedProfile" })(ProfileModified);

export default ProfileInfoModified;
