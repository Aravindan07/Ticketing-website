import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 500;
  background-color: white;
  padding: 16px;
  top: 10%;
  left: 15%;
  box-sizing: border-box;
  /* transition: all 0.3s ease-out; */
  animation: enable 0.3s linear;

  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;
export const H1 = styled.h1`
  margin-top: -16px;
  margin-bottom: 0px;
  width: 100%;
  background: #15b996;
  color: #ffffff;
  text-align: center;
`;

export const Para = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  letter-spacing: 0.04em;
  color: #484b4e;
`;
export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const CancelButton = styled.button`
  background: red;
  font-size: 18px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const ContinueButton = styled.button`
  background: #6c63fe;
  font-size: 18px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;
