import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData, setUserPhoto } from "./../../Store/Reducers/AuthReducer";

class HeaderClassContainer extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { email, id, login } = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            });
        if (this.props.id) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
                .then((response) => {
                    this.props.setUserPhoto(response.data.photos.small);
                });
        }
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo,
    };
};

const HeaderContainer = connect(mapStateToProps, { setUserData, setUserPhoto })(
    HeaderClassContainer,
);

export default HeaderContainer;
