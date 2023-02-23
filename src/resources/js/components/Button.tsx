// Buttonを作成する
//
// 1. Button.tsxを作成する
// 2. Button.tsxに以下のコードを記述する
// 3. Button.tsxをインポートする
// 4. Buttonを使用する
//

import React from 'react'
import styled from 'styled-components';

type ButtonProps = {
    buttonType: string;
    text: string;
    disabled?: boolean;
    handleClick: (event: any) => void;
};

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


export const Button: React.FC<ButtonProps> = (props) => (
    <ButtonStyle
        onClick={props.handleClick}
        disabled={props.disabled}
        className={props.buttonType}>
        {props.text}
    </ButtonStyle>
);
