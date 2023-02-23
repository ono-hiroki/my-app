import {createRoot} from "react-dom/client";
import React from "react";
import 'katex/dist/katex.min.css';
import {InlineMath, BlockMath} from 'react-katex';
import styled from "styled-components";
import 'katex/dist/katex.min.css'
import {Button} from "../components/Button";



const ButtonStyle = styled.button`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.03em;
  &.primary {
    border: none;
    background: #e8382f;
    color: #ffffff;
  }
  &.page-back {
    border: 1px solid #3e3a39;
    background: #ffffff;
    color: #3e3a39;
  }
  &.page-back-light {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #3e3a39;
  }
  &.page-back-light-font-normal {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #3e3a39;
    font-weight: normal;
    font-size: 15px;
  }
  &[disabled] {
    background: #f5f5f5;
    color: #d7dae6;
    cursor: not-allowed;
  }
  /* 誤ってダブルタップしたときにメニューが出ないようにする */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const App = () => {
    return (
        <div>
            <ButtonStyle className="primary">Click me</ButtonStyle>
            <Button>Click me</Button><br/>

            <InlineMath>\int_0^\infty x^2 dx</InlineMath>
            <BlockMath
                math={'\\int_0^\\infty x^2 dx'}
                errorColor={'#cc0000'}
            />
            <BlockMath math={`\\frac{\\text{m}} {\\text{s}^2}`}/>
            <h1>Laravel aa999</h1>
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));

    root.render(<App/>);
}
