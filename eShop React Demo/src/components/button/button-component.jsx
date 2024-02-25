import PropTypes from "prop-types";
import "./button-styles.scss";

const BTN_TYPE_CLASSES = {
    google: "btn__google",
    primary: "btn__primary",
    secondary: "btn__secondary",
    clear: "btn__clear"
}

const Button = ({ text, buttonType, ...btnProps }) => {


    return (
        <div className="btn__container">
            <button className={BTN_TYPE_CLASSES[buttonType]} {...btnProps}> {text} </button>
        </div>
    )

}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    buttonType: PropTypes.string,
    btnProps: PropTypes.object,

}