import React, { Component } from "react";
import style from "./Status.module.css";

export default class Status extends Component {
    state = {
        isAvtiveInput: false,
        inputValue: "",
    };

    hundleClickStatus = () => {
        this.setState({
            isAvtiveInput: !this.state.isAvtiveInput,
        });
    };
    hundleUpdateInputValue = (e) => {
        let vlaue = e.target.value;
        this.setState({
            inputValue: vlaue,
        });
    };

    render() {
        return (
            <div className={style.wrapper}>
                {!this.state.isAvtiveInput && (
                    <div>
                        <p onClick={this.hundleClickStatus}>{this.props.status}</p>
                    </div>
                )}
                {this.state.isAvtiveInput && (
                    <div className={style.inputBox}>
                        <input
                            className={style.input}
                            onBlur={this.hundleClickStatus}
                            type='text'
                            value={this.state.inputValue}
                            onChange={this.hundleUpdateInputValue}
                            autoFocus={true}
                        />
                    </div>
                )}
            </div>
        );
    }
}
