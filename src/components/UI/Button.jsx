// import "./Button.css";
import styled from "styled-components";

function Button({ children, color, size }) {
  const Button = styled.button`
    background-color: ${(props) => props.color || "green"};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${(props) => props.size || "20px"};
  `;

  return (
    <Button color={color} size={size}>
      {children}
    </Button>
  );
}

export default Button;
