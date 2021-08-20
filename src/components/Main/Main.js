import React, { Component } from "react";
// import style from "Main.module.css";
import { Route } from "react-router-dom";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPage from "../NewsPage/NewsPage";
import HomePage from "../HomePage/HomePage";

export default class Main extends Component {
    render() {
        // <MessagesPage getAllUsers={this.props.getAllUsers} />;

        return (
            <div>
                <Route path='/home' component={HomePage} />
                <Route path='/messages'>
                    <MessagesPage
                        getAllUsers={this.props.getAllUsers}
                        getAllComments={this.props.getAllComments}
                        messagesPage={this.props.messagesPage}
                        dispatch={this.props.dispatch}
                    />
                    ;
                </Route>
                {/* <Route path='/news' render={() => <Item menu={this.props.getAllUsers} />} /> */}
                <Route path='/news' component={NewsPage} />
            </div>
        );
    }
}
