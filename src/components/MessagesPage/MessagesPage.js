import React, { Component } from "react";
import style from "./MessagesPage.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

export default class MessagesPage extends Component {
    state = {
        _urlThisPale: "/messages",
        users: [],
    };

    componentDidMount() {
        this.props.getAllUsers().then((users) => {
            this.setState({
                users: users,
            });
        });
    }
    idUser = (user) => {
        return user.name.replace(/\s/g, "").toLocaleLowerCase() + user.id;
    };
    render() {
        return (
            <>
                <main className={style.wrapper}>
                    <div className={style.col1}>
                        <h3 className={style.title}>Dialogues</h3>
                        <Dialogs allUsers={this.state.users} idUser={this.idUser} />
                    </div>
                    <div className={style.col2}>
                        <Route path='/messages/leannegraham1' component={Mess} />
                    </div>
                </main>
            </>
        );
    }
}
const Mess = () => {
    return (
        <>
            <div className={style.msgLeftBlock}>
                <p className={style.msgLeft}>Nisi quis nisi sint sint enim.</p>
            </div>
            <div className={style.msgRightBlock}>
                <p className={style.msgRight}>
                    Ad cupidatat dolore culpa qui deserunt qui cupidatat.
                </p>
            </div>
            <div className={style.msgLeftBlock}>
                <p className={style.msgLeft}>Officia eu id dolor laborum occaecat labore.</p>
            </div>
            <div className={style.msgRightBlock}>
                <p className={style.msgRight}>
                    Veniam aliqua minim mollit ut pariatur ullamco eiusmod.
                </p>
            </div>
            <div className={style.msgLeftBlock}>
                <p className={style.msgLeft}>
                    Id sit esse occaecat do sit culpa minim aliquip laboris in sint incididunt
                    ipsum.
                </p>
            </div>
        </>
    );
};
