import React, { Component } from 'react'
import style from "./Aside.module.css"
export default class Aside extends Component {
  render() {
    return (
      <>
        <aside className={style.aside}>
                    <ul className={style.list}>
                        <li className={style.item}>Home</li>
                        <li className={style.item}>Messages</li>
                        <li className={style.item}>News</li>
                    </ul>
                </aside>
      </>
    )
  }
}
