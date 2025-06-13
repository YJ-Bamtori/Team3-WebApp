import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #333;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.$weight || 400};
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

function Title({ title = "제목 없음", weight }) {
  return <StyledTitle $weight={weight}>{title}</StyledTitle>;
}

export default Title;
