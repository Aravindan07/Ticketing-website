import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarIcon = styled.div`
  svg {
    margin-top: 15px;
  }
`;

export const H2 = styled.h2`
  text-align: center;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 50%;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0px 20px 0px;
  background: #f2f2f2;
  padding: 15px;
  ::placeholder {
    font-size: 16px;
  }
  :active,
  :focus {
    border: 2px solid #15b996;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  padding: 12px;
  background: #15b996;
  color: #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
`;
