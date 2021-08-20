import React, { Component } from "react";
import style from "./MessagesPage.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesItemTest from "./MessagesItem/MessagesItemTest";

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
        // console.log();
        return (
            <>
                <main className={style.wrapper}>
                    <div className={style.col1}>
                        <h3 className={style.title}>Dialogues</h3>
                        <Dialogs allUsers={this.state.users} idUser={this.idUser} />
                    </div>
                    <div className={style.col2}>
                        <Route path='/messages/leannegraham1'>
                            <MessagesItem getAllComments={this.props.getAllComments} idUser={1} />
                        </Route>
                        <Route
                            path='/messages/ervinhowell2'
                            render={() => (
                                <MessagesItemTest
                                    messagesPage={this.props.messagesPage}
                                    dispatch={this.props.dispatch}
                                />
                            )}
                        />
                        <p>{this.props.updateInputValue}</p>
                    </div>
                </main>
            </>
        );
    }
}
