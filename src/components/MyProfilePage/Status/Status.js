import React, {Component} from "react";
import style from "./Status.module.css";


export default class Status extends Component {
    state = {
        isActiveInput: false,
        status: this.props.status ? this.props.status : 'set status',
    };

    handleClickStatus = () => {
        this.setState({
            isActiveInput: !this.state.isActiveInput,
        });
        // this.props.putStatus(this.state.status)
    };
    handleUpdateStatus = (e) => {
        let value = e.target.value;
        this.setState({
            status: value,
        });

    };
    handleClickSaveStatus =  () =>  {
        this.setState({
            isActiveInput: !this.state.isActiveInput,
        });
        this.props.putStatus(this.state.status)
    }
    handleClickCloseStatus =  () =>  {
        this.setState({
            isActiveInput: !this.state.isActiveInput,
        });

    }

    renderStatus() {
        return (
            <div>
                <p onClick={this.handleClickStatus}>{this.state.status}</p>
            </div>
        )
    }

    renderInputStatus() {
        return (
            <div>
                {this.renderStatus()}
                <div className={style.inputWrap}>
                    <div className={style.inputBox}>
                        <input
                            maxLength={100}
                            className={style.input}
                            // onBlur={this.handleClickStatus}
                            type='text'
                            value={this.state.status}
                            onChange={this.handleUpdateStatus}
                            autoFocus={true}
                        />
                    </div>
                    <button type={"button"} className={style.btnSaveStatus} onClick={this.handleClickSaveStatus}>To apply</button>
                    <button type={"button"} className={style.btnCloseStatus} onClick={this.handleClickCloseStatus}>To apply</button>
                </div>
            </div>
        )
    }

    render() {
        // console.log(this.state.status)
        return (
            <div className={style.wrapper}>
                {!this.state.isActiveInput && this.renderStatus()}
                {this.state.isActiveInput && this.renderInputStatus()}

            </div>
        );
    }
}
