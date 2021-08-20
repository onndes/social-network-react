import React, { Component } from "react";
import style from "./MessagesItem.module.css";
export default class MessagesItem extends Component {
    state = {
        commnets: null,
    };

    componentDidMount() {
        this.props.getAllComments(3).then((commnets) => {
            this.setState({
                commnets: commnets.body,
            });
        });
    }

    generationMessages = () => {
        if (this.state.commnets) {
            return this.state.commnets.map((item, i) => {
                let msgStBlock = '';
                let msgSt = '';
                if (i % 2 === 0) {
                    msgStBlock = style.msgLeftBlock;
                    msgSt = style.msgLeft;
                } else {
                    msgStBlock = style.msgRightBlock;
                    msgSt = style.msgRight;
                }
                return (
                    <div key={i} className={msgStBlock}>
                        <p className={msgSt}>{item}</p>
                    </div>
                );
            });
        }
    };

    render() {
        // eslint-disable-next-line
        const msg = this.generationMessages();
        return <div className={style.reactDiv}>{msg}</div>;
    }
}
