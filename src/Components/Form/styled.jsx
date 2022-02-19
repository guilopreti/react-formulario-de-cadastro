import styled from "styled-components";

export const FormCad = styled.form`
  width: 310px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: saddlebrown;
  opacity: 0.8;
  justify-content: space-evenly;
  border-radius: 25px;

  div {
    position: relative;
    height: 55px;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  span {
    color: #ff4500;
    margin-top: 10px;
  }

  button {
    height: 40px;
    width: 140px;
  }

  input {
    display: block;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    border: none;
    padding-top: 10px;
  }

  input:focus {
    outline: 0;
  }

  label {
    display: block;
    font-size: 20px;
    width: 100%;
    box-sizing: border-box;
    transition-duration: 0.2s;
    left: 2px;
    top: 18px;
  }

  input:focus + label {
    font-size: 15px;
    transform: translateY(-20px);
  }

  input:valid + label {
    font-size: 15px;
    transform: translateY(-20px);
  }

  .input-name input {
    color: ${(props) => `${props.color1}`};
  }

  .input-name label {
    color: ${(props) => `${props.color1}`};
  }

  .input-name input:focus + label {
    color: ${(props) => `${props.color1}`};
  }

  .input-name input:valid + label {
    color: ${(props) => `${props.color1}`};
  }

  .input-email input {
    color: ${(props) => `${props.color2}`};
  }

  .input-email label {
    color: ${(props) => `${props.color2}`};
  }

  .input-email input:focus + label {
    color: ${(props) => `${props.color2}`};
  }

  .input-email input:valid + label {
    color: ${(props) => `${props.color2}`};
  }

  .input-senha input {
    color: ${(props) => `${props.color3}`};
  }

  .input-senha label {
    color: ${(props) => `${props.color3}`};
  }

  .input-senha input:focus + label {
    color: ${(props) => `${props.color3}`};
  }

  .input-senha input:valid + label {
    color: ${(props) => `${props.color3}`};
  }

  .input-conf-senha input {
    color: ${(props) => `${props.color4}`};
  }

  .input-conf-senha label {
    color: ${(props) => `${props.color4}`};
  }

  .input-conf-senha input:focus + label {
    color: ${(props) => `${props.color4}`};
  }

  .input-conf-senha input:valid + label {
    color: ${(props) => `${props.color4}`};
  }
`;
