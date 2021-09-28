import React from "react";
import s from "./ModalFoto.module.css";
const ModalFoto = ({ setDataInputFile, dataInputFile, onClickSendFoto }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.modalWindow}>
                <form>
                    <input
                        type='file'
                        onChange={(e) => {
                            setDataInputFile(e.target.files[0]);
                        }}
                    />
                    <button type='button' onClick={onClickSendFoto}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalFoto;
