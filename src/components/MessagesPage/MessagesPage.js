import React, { useEffect, useState } from "react";
import style from "./MessagesPage.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesItemTestContainer from "./MessagesItem/MessagesItemTestContainer";

const MessagesPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        let mount = false;
        // mount - in order to remove the error, the component is not yet mounted
        if (!mount) {
            window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        }
        return () => (mount = true);
    }, [windowWidth, setWindowWidth]);

    return (
        <>
            <main className={style.wrapper}>
                <div className={style.col1}>
                    <h3 className={style.title}>
                        Dialogues <span>[page stub]</span>
                    </h3>
                    <Dialogs />
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
