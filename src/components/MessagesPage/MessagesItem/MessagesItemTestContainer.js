import {
    updataBodyMessagestextActionCreator,
    addMessagesActionCreator,
} from "../../../Store/Reducers/MessagesPageReducer";
import { connect } from "react-redux";
import MessagesItemTest from "./MessagesItemTest";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    };  
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (body) => {
            return dispatch(updataBodyMessagestextActionCreator(body));
        },
        clickButton: () => {
            return dispatch(addMessagesActionCreator());
        },
    };
};

const MessagesItemTestContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesItemTest);

export default MessagesItemTestContainer;
