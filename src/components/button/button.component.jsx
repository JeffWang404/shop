import './button.styles.scss';

const BUTTON_TYPE_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherTypes }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...otherTypes}
    >
      {children}
    </button>
  );
};

export default Button;
