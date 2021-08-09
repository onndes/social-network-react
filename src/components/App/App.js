import React, { Component } from "react";
import style from "./App.module.css";

export default class App extends Component {
    render() {
        return (
            <div className={style.app}>
                <header className={style.header}>Header</header>
                <aside className={style.aside}>
                    <ul className={style.list}>
                        <li className={style.item}>Home</li>
                        <li className={style.item}>Messages</li>
                        <li className={style.item}>News</li>
                    </ul>
                </aside>
                <main className={style.main}>
                    <div>Test</div>
                </main>
                <footer className={style.footer}>
                  <div>footer</div>
                </footer>
            </div>
        );
    }
}
