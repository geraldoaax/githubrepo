import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 30px;
  display: flex;
  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background: #0d2636;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
`;
