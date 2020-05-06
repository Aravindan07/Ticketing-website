import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
  position: fixed;
`;

export const Header = styled.div`
  display: flex;
  background: #6c63fe;
  justify-content: space-between;
  align-items: center;
`;
export const H3 = styled.h3`
  /* color: #f5f5f5; */
  background: linear-gradient(90deg, #eb3349, #f45c43);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-left: 15px;
  font-size: 40px;
`;
export const Anchor = styled.a`
  padding: 5px 20px 5px 20px;
  background: linear-gradient(90deg, #eb3349, #f45c43);
  color: #ffffff;
  font-size: 20px;
  border: 1px solid transparent;
  text-decoration: none;
  :hover {
    background: linear-gradient(90deg, #03bee9, #1779e4);
    color: #ffffff;
  }
`;
export const Navigation = styled.div`
  width: 250px;
  margin-right: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const H1 = styled.h1`
  color: #000000;
`;
export const Para = styled.p`
  color: #000000;
`;

export const Content = styled.div`
  /* margin-left: 40px;
  margin-top: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  background: linear-gradient(90deg, #eb3349, #f45c43);
  font-size: 18px;
  letter-spacing: 0.6px;
  margin-left: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px 3px #cecece;
    background: linear-gradient(90deg, #03bee9, #1779e4);
    color: #ffffff;
  }
`;
