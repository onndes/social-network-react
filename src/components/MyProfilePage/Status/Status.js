import React, {Component} from "react";
import style from "./Status.module.css";
import Preloader from "../../../Common/Preloader/Preloader";


export default class Status extends Component {
    state = {
        isActiveInput: false,
        status: this.props.status ? this.props.status : 'set status',
    };

    handleClickStatus = () => {
        this.setState({
            isActiveInput: !this.state.isActiveInput,
        });
    };
    handleUpdateStatus = (e) => {
        let value = e.target.value;
        this.setState({
            status: value,
        });

    };
    handleClickSaveStatus = () => {
        this.setState({
            isActiveInput: !this.state.isActiveInput,
        });
        this.props.putStatus(this.state.status)
    }
    handleClickCloseStatus = () => {
        // TODO: сделать кастомную модалку

        if (window.confirm('Exit without saving?')) {
            this.setState({
                isActiveInput: !this.state.isActiveInput,
            });
            if (this.state.status !== this.props.status) {
                this.setState({
                    status: this.props.status
                });
            }
        }


    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    renderStatus() {
        if (this.props.isUpdatingMyStatus) {
            return (
                <div className={style.pStatusBox}>
                    <p className={style.pStatus}>{this.state.status}</p>
                    <div className={style.statusUpdating}>
                        <p>status updating</p>
                        <Preloader height={'10px'}/>
                    </div>
                </div>
            )
        } else {
            return ( <div className={style.pStatusBox}>
                <p className={style.pStatus} onClick={this.handleClickStatus}>{this.status.status}</p>
            </div>
            )
        }

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
                    <button type={"button"} className={style.btnSaveStatus} onClick={this.handleClickSaveStatus}>To
                        apply
                    </button>
                    <button type={"button"} className={style.btnCloseStatus} onClick={this.handleClickCloseStatus}>Exit
                        edit
                    </button>
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
