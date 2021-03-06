import React, { useRef, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";

import ProfileInfoModified from "./ProfileInfoModified/ProfileInfoModified";
import s from "./SettingsPage.module.css";

const SettingsPage = (props) => {
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
    });

    const onSubmit = (data) => {
        if (data) {
            props.upadateProfileInfo(data);
        }
    };

    return (
        <div className={s.wrapper} ref={divRef}>
            <div className={s.menu}>
                <ul className={s.menuList}>
                    <li className={s.menuItem}>
                        <NavLink to='/settings/edit-profile-info' activeClassName={s.active}>
                            Editing profile information
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.settingsWrapper}>
                <div className={s.settingsMenu}>
                    <Route
                        path={"/settings/edit-profile-info"}
                        render={() => (
                            <ProfileInfoModified
                                initialValues={props.profile}
                                onSubmit={onSubmit}
                                profileUser={props.profile}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
