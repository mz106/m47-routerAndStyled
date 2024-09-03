import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 15vh;
  margin: 0 auto;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  text-align: center;
  padding: 4px 16px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;
