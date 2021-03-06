import React, { useState, useEffect } from "react";
import s from "./MessagesPage.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Dialog from "./Dialog/Dialog";
import { Route, withRouter } from "react-router-dom";
import cn from "classnames";

const DialogsPage = (props) => {
    const [windowWidth, setWindowWidth] = useState(props.windowWidth);

    useEffect(() => {
        setWindowWidth(props.windowWidth);
    }, [props.windowWidth]);

    return (
        <div
            className={cn(
                s.wrapper,
                { [s.wrapperForBig]: windowWidth >= 576 },
                { [s.wrapperForSmall]: windowWidth < 576 },
            )}>
            <div>
                <Route exact={windowWidth < 576} path={`/messages`}>
                    <DialogsList
                        dialogs={props.dialogs}
                        openDialogId={props.openDialogId}
                        setOpenDialog={props.setOpenDialog}
                    />
                </Route>
            </div>
            <Route
                path={`/messages/:userId`}
                render={() => (
                    <ContainerDialogWithRouter
                        setOpenDialog={props.setOpenDialog}
                        dialogs={props.dialogs}
                        openDialogId={props.openDialogId}
                        windowWidth={windowWidth}
                        addMessage={props.addMessage}
                        reset={props.reset}
                    />
                )}
            />
        </div>
    );
};

class DialogWithRouter extends React.Component {
    render() {
        return <Dialog {...this.props} />;
    }
}
const ContainerDialogWithRouter = withRouter(DialogWithRouter);
export default DialogsPage;
