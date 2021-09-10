import {
    addMessagesActionCreator,
} from "../../../Store/Reducers/MessagesPageReducer";
import { connect } from "react-redux";
import MessagesItemTest from "./MessagesItemTest";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    };  
};


const MessagesItemTestContainer = connect(mapStateToProps, {addMessagesActionCreator})(MessagesItemTest);

export default MessagesItemTestContainer;
