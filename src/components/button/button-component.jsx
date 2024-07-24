import PropTypes from "prop-types";

import { ButtonContainer, ButtonSpinner } from "./button-styles.jsx";

export const BTN_TYPE_CLASSES = {
    google: "btn__google",
    primary: "btn__primary",
    secondary: "btn__secondary",
    clear: "btn__clear"
}

const Button = ({ text, buttonType, isLoading, ...btnProps }) => {

    return (
        <ButtonContainer>
            {
                isLoading
                ? <ButtonSpinner/>
                : <button className={BTN_TYPE_CLASSES[buttonType]} {...btnProps} disabled={isLoading}> {text} </button>
            }
        </ButtonContainer>
    )
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    buttonType: PropTypes.string,
    btnProps: PropTypes.object,
    isLoading: PropTypes.bool

}