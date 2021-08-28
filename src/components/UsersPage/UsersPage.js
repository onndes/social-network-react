import React from "react";
import style from "./UsersPage.module.css";

const UsersPage = (props) => {
    const users = [
        {
            id: 1,
            firstName: "Anna",
            secondName: "Gorils",
            photoUrl: "https://dekatop.com/wp-content/uploads/2019/01/people_03.jpg",
            age: 22,
            location: { city: "Kiev", country: "Ukraine" },
            follow: true,
            status: false,
        },
        {
            id: 2,
            firstName: "Viktor",
            secondName: "Botr",
            photoUrl: "https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",
            age: 32,
            location: { city: "Mosscow", country: "Russia" },
            follow: false,
            status: false,
        },
        {
            id: 3,
            firstName: "Kira",
            secondName: "Morzi",
            photoUrl: "https://yablyk.com/wp-content/uploads/2018/03/shakira.jpg",
            age: 45,
            location: { city: "Odessa", country: "Ukraine" },
            follow: true,
            status: true,
        },
    ];

    if (props.usersPage.users.length === 0) {
        props.setUser(users);
    }

    const renderUsersList = () => {
        return props.usersPage.users.map((user) => {
            return (
                <div key={user.id} className={style.userWrapp}>
                    <div className={style.firstCol}>
                        <div className={style.imgContainer}>
                            <img src={user.photoUrl} alt='' />
                        </div>
                        <div className={style.btnContainer}>
                            {user.follow ? (
                                <button
                                    className={style.unfollow + " " + style.btnfollow}
                                    onClick={() => props.unFollow(user.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    className={style.follow + " " + style.btnfollow}
                                    onClick={() => props.follow(user.id)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={style.secondCol}>
                        <div className={style.nameAndOnlineBox}>
                            <p className={style.titleName}>
                                {user.firstName + " " + user.secondName}
                                {}
                            </p>
                            {user.status ? (
                                <p className={style.statusOnline + " " + style.status}>Online</p>
                            ) : (
                                <p className={style.statusOffline + " " + style.status}>Offline</p>
                            )}
                        </div>
                        <p className={style.titleLocation}>
                            {user.location.city}, {user.location.country}
                        </p>
                    </div>
                </div>
            );
        });
    };
    return <div className={style.Wrapper}>{renderUsersList()}</div>;
};

export default UsersPage;
