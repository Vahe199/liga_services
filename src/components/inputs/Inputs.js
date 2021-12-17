import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

function Inputs() {
  return (
    <div>
      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Last Name" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
