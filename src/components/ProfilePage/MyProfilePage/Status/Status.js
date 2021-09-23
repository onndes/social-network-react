import React, { useState, useEffect } from "react";
import style from "./Status.module.css";
import Preloader from "../../../../Common/Preloader/Preloader";

const StatusHook = (props) => {
    const [isActiveInput, setActiveInput] = useState(false);
    const [status, setStatus] = useState(props.status ? props.status : "set status");

    const handleClickSaveStatus = () => {
        setActiveInput(!isActiveInput);
        setStatus(status);
        props.putStatus(status);
    };
    const handleClickStatus = () => {
        setActiveInput(!isActiveInput);
    };
    const handleUpdateStatus = (e) => {
        let value = e.target.value;
        setStatus(value);
    };

    const handleClickCloseStatus = () => {
        // TODO: сделать кастомную модалку

        if (window.confirm("Exit without saving?")) {
            setActiveInput(!isActiveInput);
            if (status !== props.status) {
                setStatus(props.status);
            }
        }
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const renderStatus = () => {
        if (props.isUpdatingMyStatus) {
            return (
                <div className={style.pStatusBox}>
                    <p className={style.pStatus}>{status}</p>
                    <div className={style.statusUpdating}>
                        <p>status updating</p>
                        <Preloader height={"10px"} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className={style.pStatusBox}>
                    <p className={style.pStatus} onClick={handleClickStatus}>
                        {status}
                    </p>
                </div>
            );
        }
    };

    const renderInputStatus = () => {
        return (
            <div>
                {renderStatus()}
                <div className={style.inputWrap}>
                    <div className={style.inputBox}>
                        <input
                            maxLength={100}
                            className={style.input}
                            // onBlur={handleClickStatus}
                            type='text'
                            value={status}
                            onChange={handleUpdateStatus}
                            autoFocus={true}
                        />
                    </div>
                    <button
                        type={"button"}
                        className={style.btnSaveStatus}
                        onClick={handleClickSaveStatus}>
                        To apply
                    </button>
                    <button
                        type={"button"}
                        className={style.btnCloseStatus}
                        onClick={handleClickCloseStatus}>
                        Exit edit
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className={style.wrapper}>
            {!isActiveInput && renderStatus()}
            {isActiveInput && renderInputStatus()}
        </div>
    );
};
export default StatusHook;
