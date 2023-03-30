import styled from '@emotion/styled';

export const ErrMessage = styled.p`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 10px 0;
  font-size: 10px;
  color: red;
`;

export const FormWrap = styled.form`
  padding: 20px 40px 35px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 6px 4px rgba(0, 0, 0, 0.06);
`;

export const FormInput = styled.input`
  font-size: 20px;
  width: 300px;
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 16px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 20px;

  cursor: pointer;

  font-size: 26px;
`;
