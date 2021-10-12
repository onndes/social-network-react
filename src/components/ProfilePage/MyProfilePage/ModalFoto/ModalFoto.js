import React from "react";
import s from "./ModalFoto.module.css";
;
const ModalFoto = ({
    setDataInputFile,
    onClickSendFoto,
    dataInputFile,
    isPhotoSelect,
    setPhotoSelect,
    setModalChangeFoto,

}) => {
    return (
        <div
            onClick={(e) => {
                if (!e.target.className.indexOf("ModalFoto_wrapper")) {
                    setModalChangeFoto(false);
                }
            }}
            className={s.wrapper}>
            <div id='wrapper' className={s.modalWindow}>
                <form className={s.form}>
                    <div className={s.inputWrap}>
                        <div className={s.labelWrapp}>
                            <label
                                className={s.label}
                                htmlFor='photo'
                                onClick={() => setPhotoSelect(false)}>
                                select a photo
                            </label>
                            {dataInputFile && <p className={s.pFileLoad}>(File selected)</p>}
                        </div>
                        <input
                            className={s.inputFile}
                            type='file'
                            onChange={(e) => {
                                setDataInputFile(e.target.files[0]);
                            }}
                            id='photo'
                        />
                    </div>
                    {isPhotoSelect && (
                        <div className={s.noPhotoSelectWrapp}>Photo not selected</div>
                    )}
                    <button className={s.btn} type='button' onClick={onClickSendFoto}>
                        Send
                    </button>
                </form>
                <div
                    onClick={() => {
                        setModalChangeFoto(false);
                    }}
                    className={s.closeModal}></div>
            </div>
        </div>
    );
};

export default ModalFoto;
