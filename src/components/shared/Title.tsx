import styled from "styled-components";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TitleContainer>{children}</TitleContainer>
      <hr
        style={{
          width: "100%",
          borderColor: "var(--border-color)",
          margin: "0.5rem 0",
        }}
      />
    </>
  );
};

const TitleContainer = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-bottom: 15px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.125rem;
  }
  @media (max-width: 320px) {
    font-size: 0.875rem;
    margin-bottom: 0.0625rem;
  }
  @media (max-width: 240px) {
    font-size: 0.75rem;
    margin-bottom: 0.03125rem;
  }
`;
