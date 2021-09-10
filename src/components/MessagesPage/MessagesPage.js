import React from "react";
import style from "./MessagesPage.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesItemTestContainer from "./MessagesItem/MessagesItemTestContainer";

const MessagesPage = () => {
    return (
        <>
            <main className={style.wrapper}>
                <div className={style.col1}>  
                    <h3 className={style.title}>Dialogues</h3>
                    <Dialogs/>
                </div>
                <div className={style.col2}>
                    <Route path='/messages/2'>
                        <MessagesItem />
                    </Route>

                    <Route path='/messages/1' render={() => <MessagesItemTestContainer />} />
                </div>
            </main>
        </>
    );
};
export default MessagesPage;
