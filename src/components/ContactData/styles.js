import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  color: #15b996;
  font-size: 35px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px 12px 12px 55px;
  margin: 20px 0px 20px 0px;
  background: #f2f2f2;
  outline: none;
  border: none;
  border-radius: 5px;
  :focus,
  :active {
    border: 2px solid #15b996;
    box-shadow: 0px 0px 18px rgba(21, 185, 150, 0.25);
  }
`;

export const Submit = styled.button`
  padding: 15px;
  margin-top: 15px;
  font-size: 18px;
  width: 100px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #ffffff;
  background: #15b996;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  }
`;
