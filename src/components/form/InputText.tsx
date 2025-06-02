import styled from "styled-components";

interface InputTextProps {
  // Define the props for InputText if needed
  children?: React.ReactNode;
}

export const InputText = ({ children }: InputTextProps) => {
  return (
    <Container>
      <div className="form-group field">{children}</div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  .form-group {
    position: relative;
    width: 100%;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.text};
    transition: background-color 5000s ease-in-out 0s;
  }
  .form-field {
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 15px;
    font-family: inherit;
    outline: 0;
    font-size: 17px;
    color: ${(props) => props.theme.text};
    padding: 12px;
    background: inherit;
    transition: border-color 0.2s;
    width: 94%;
    &.disabled {
      color: #696969;
      background: #2d2d2d;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }
  .form-field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
  }

  .form-field:focus {
    font-weight: 700;
    border-image-slice: 1;
    border: 2px solid #1cb0f6;
  }
  /* reset input */
  .form-field:required,
  .form-field:invalid {
    box-shadow: none;
  }
`;
