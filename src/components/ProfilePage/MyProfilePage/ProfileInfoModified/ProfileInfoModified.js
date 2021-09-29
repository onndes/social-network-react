import s from "./ProfileInfoModified.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../Common/CastomFrom/CustomFrom";
const ProfileModified = ({ profile, onSubmit }) => {
    const contacts = Object.keys(profile.contacts).map((title) => {
        return (
            <div key={title} className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>{title}: </p>
                <Field className={s.descriptionPI} component={Input} name={title} />
            </div>
        );
    });

    return (
        <form onSubmit={onSubmit} className={s.wrappProfileInfoPI}>
            {/* <div className={s.wrapTitleInfoPI}>
              <p className={s.titlePI}>Full name: </p>
              <p className={s.descriptionPI}>{profile.fullName}</p>
          </div> */}
            <div className={s.wrapTitleInfoPI}>
                <label className={s.titlePI}>About me: </label>
                <Field className={s.descriptionPI} component={Input} name={"aboutMe"} />
            </div>
            <div className={s.wrapTitleInfoPI}>
                <label className={s.titlePI}>Looking for a job: </label>
                <Field
                    className={s.descriptionPI}
                    component={Input}
                    type={"checkbox"}
                    name={"lookingForAJob"}
                />
            </div>
            <div className={s.wrapTitleInfoPI}>
                <p className={s.titlePI}>What work I'm looking for: </p>
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
        </form>
    );
};

const ProfileInfoModified = reduxForm({ form: "modifiedProfile" })(ProfileModified);

export default ProfileInfoModified;
