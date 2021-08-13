import React, { Component } from "react";
import style from "./Footer.module.css";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className={style.footer}>
                    <div>Footer</div>
                </footer>
            </>
        );
    }
}
