import styled from 'styled-components';

export const FormInputWrapper = styled.div`
  width: 700px;
  height: 55px;
`;
export const FormTextAreaWrapper = styled.div`
  width: 700px;
  height: 350px;
`;

export const FormInput = styled.input`
  position: ${p => (p.nonAbsolute ? 'flex' : 'absolute')};
  width: ${p => (p.inputSize ? `${p.inputSize}px` : '300px')};
  left: 650px;
  height: 40px;
  margin-left: 50px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: 'block';
  position: relative;
  margin-left: 5px;
  width: 50px;
`;

export const Button = styled.input`
  width: 120px;
  height: 45px;
  margin-left: ${p => (p.marginLeft ? `${p.marginLeft}px` : '15px')};
  background: ${p => (p.isRegBtn ? '#F88720' : '#ffffff')};
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  border: ${p => (p.isRegBtn ? 0 : '1px solid #2C3131')};
  outline: 0;
  color: ${p => (p.isRegBtn ? '#FFFFFF' : '#000000')};
`;

export const TextArea = styled.textarea`
  width: 800px;
  height: 300px;
`;
