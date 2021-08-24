import React from "react";
import { Route } from "react-router-dom";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPageContainer from "../NewsPage/NewsPageContainer";
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
                    <NewsPageContainer newsPage={props.newsPage} dispatch={props.dispatch} />
                )}
            />
        </div>
    );
};
export default Main;
