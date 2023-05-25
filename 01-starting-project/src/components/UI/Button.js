import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={"button" || props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
