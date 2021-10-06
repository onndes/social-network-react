import React from "react";
// import s from "./MessagesPage.module.css";
import Dialogs from "./Dialogs/Dialogs";

const DialogsPage = (props) => {
    return <Dialogs dialogs={props.dialogs} openDialogId={props.openDialogId} />;
};

export default DialogsPage;
