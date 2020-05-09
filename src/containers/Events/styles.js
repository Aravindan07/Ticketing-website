import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  /* height: 100px; */
  background: #6c63fe;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  margin-left: 20px;
`;
export const Button = styled.button`
  margin-right: 40px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  background: palevioletred;
  color: #ffffff;
  :hover {
    cursor: pointer;
    background: #15b996;
  }
`;
export const Search = styled.div`
  text-align: center;
  margin-top: 30px;
  label {
    margin-right: 15px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  padding: 15px 55px 15px 10px;
  border: none;
  outline: none;
  background: #f2f2f2;
  font-size: 18px;
  :active,
  :focus {
    border: 2px solid #15b996;
  }
`;
export const EventsDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Event = styled.div`
  width: 250px;
  height: 250px;
  margin-left: 50px;
  margin-top: 50px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const CreatedDetails = styled.p`
  color: #b3b4b6;
  font-size: 12px;
  text-align: center;
  span {
    color: #757778;
  }
`;
export const H2 = styled.h2`
  color: #15b996;
  text-align: center;
  margin-top: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: 0.04em;
`;
export const Content = styled.p`
  padding: 10px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  letter-spacing: 0.04em;
  color: #484b4e;
`;
export const More = styled.p`
  padding-left: 10px;
  line-height: 20px;
  /* identical to box height, or 167% */
  letter-spacing: 0.07em;
  text-decoration: underline;
  color: #6c63fe;
  cursor: pointer;
  /* :hover,
  :active {
    
    color: #15b996;
    text-decoration: underline; 
  }*/
`;
