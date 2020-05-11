import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;
export const DetailsCard = styled.div`
  width: 50%;
  /* height: 300px; */
  box-sizing: border-box;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H2 = styled.h2`
  letter-spacing: 0.6px;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 1px;
  background: #6c63fe;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    background: #15b996;
  }
`;
