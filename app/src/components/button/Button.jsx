import "./Button.scss";

const Button = (prop) => {
  
  return (
    <button className={`button ${prop.className || ""}`}>
      {prop.children}
    </button>
  );
};

export default Button;
