import { ButtonSty } from "./styled";

const Button = ({ children, onClick }) => {
  return <ButtonSty onClick={onClick}>{children}</ButtonSty>;
};

export default Button;
