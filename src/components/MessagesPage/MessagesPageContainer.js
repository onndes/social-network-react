import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class MessageseContainer extends Component {
    render() {
        return <MessagesPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(MessageseContainer);
