import React from "react";
import preloader from "../../assets/img/preloader.svg";

const Preloader = (props) => {
    const style = {
        height: props.height,

    }
    return <img src={preloader} alt='' style={style}/>;
};

export default Preloader;
