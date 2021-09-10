import React, { Component } from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default class Dialogs extends Component {

    generateDialogs() {
        
        return (
            <>
              <li key={1} className={style.item}>
                  <NavLink to={`/messages/${1}`} activeClassName={style.active}>
                      Nikita
                  </NavLink>
              </li>
              <li key={1} className={style.item}>
                  <NavLink to={`/messages/${2}`} activeClassName={style.active}>
                      Alisa
                  </NavLink>
              </li>
            </>
        );
    }

    render() {
        return <ul className={style.list}>{this.generateDialogs()}</ul>;
    }
}
