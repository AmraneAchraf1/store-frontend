import styles from "./btn.module.css";


export const BtnGroup = ({children, ...props}) => {

  return (
    <div className="d-flex align-items-center justify-content-center gap-5" {...props}>
        {children}
    </div>
  )
}


const Button = ({ children, variant, direction, ...props }) => {

  
  const btnDirection = () => {
    if (direction === "left") {
      return styles.left;
    }
    return styles.right;
  };

  const btnVariant = () => {
    if (variant === "black") {
      return styles.black;
    }
    return styles.green;
  };

  return (
    <button
      {...props}
      className={`${styles.btn} ${btnVariant()} ${btnDirection()}`}
    >

      {children}
      
    </button>
  );
};

Button.Group = BtnGroup
export default Button;
