import styled from "styled-components";
import boasVindas from "../../imgs/boasVindas.png";

export const HomeSection = styled.section`
  background: url(${boasVindas});
  background-repeat: no-repeat;
  background-size: 380px;
  background-position: bottom;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    color: antiquewhite;
    margin-top: auto;
    margin-bottom: 35px;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
  }

  button {
    margin-bottom: 365px;
    height: 40px;
    width: 105px;
  }

  @media (min-width: 769px) {
    background-position: left;
    background-size: 500px;
    justify-content: flex-end;
    align-items: center;

    h1 {
      text-align: right;
      margin-right: 35px;
      margin-top: 190px;
    }

    button {
      margin-right: 85px;
      margin-bottom: 219px;
    }
  }

  @media (min-width: 951px) {
    background-position: bottom;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;

    h1 {
      margin-top: 25px;
      width: auto;
      margin-left: 25px;
    }

    button {
      margin-bottom: 0;
      margin-right: 0;
      margin-top: 20px;
    }
  }
`;
