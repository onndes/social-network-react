import React, { useEffect, useState } from "react";
import style from "./MessagesPage.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import MessagesItem from "./MessagesItem/MessagesItem";
import MessagesItemTestContainer from "./MessagesItem/MessagesItemTestContainer";

const MessagesPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const hundleSetWindowWidth = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", hundleSetWindowWidth);
        return () => window.removeEventListener("resize", hundleSetWindowWidth);
    }, [windowWidth]);

    return (
        <>
            <main className={style.wrapper}>
                {windowWidth > 576 && (
                    <>
                        {" "}
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

                            <Route
                                path='/messages/1'
                                render={() => <MessagesItemTestContainer />}
                            />
                        </div>
                    </>
                )}
                {windowWidth < 576 && (
                    <>
                    
                        <Route path='/messages' exact>
                            {" "}
                            <div className={style.col1}>
                                <h3 className={style.title}>
                                    Dialogues <span>[page stub]</span>
                                </h3>
                                <Dialogs />
                            </div>
                        </Route>
                        
                        <Route path='/messages/2' component={MessagesItem}></Route>
                        <Route path='/messages/1' render={() => <MessagesItemTestContainer />} />
                    </>
                )}
            </main>
        </>
    );
};
export default MessagesPage;
