import React from "react";
import { Route } from "react-router-dom";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPage from "../NewsPage/NewsPage";
import HomePage from "../HomePage/HomePage";

const Main = (props) => {
    return (
        <div>
            <Route path='/home' component={HomePage} />
            <Route path='/messages'>
                <MessagesPage
                    getAllUsers={props.getAllUsers}
                    getAllComments={props.getAllComments}
                    store={props.store}
                />
                ;
            </Route>
            {/* <Route path='/news' render={() => <Item menu={props.getAllUsers} />} /> */}
            <Route
                path='/news'
                render={() => (
                    <NewsPage newsPage={props.newsPage} dispatch={props.dispatch} />
                )}
            />
        </div>
    );
};
export default Main;
