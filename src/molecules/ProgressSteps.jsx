import styled from "styled-components";

const StepsWrapper = styled.div`
  width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

const Step = styled.div`
  z-index: 2;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active || props.$completed ? "#4284ff" : "#dfdfe1"};
  border: none;
  outline: 1.4px solid white;
  box-shadow: ${(props) =>
    props.$active ? "0px 0px 18px 0px rgba(66, 132, 255, 0.6)" : "none"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 12px;
    height: 12px;
  }
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  right: 0;
  width: 90%;
  height: 10px;
  background-color: #f4f4f4;
  border-radius: 1000px;
  transform: translateY(-50%);
  z-index: 0;
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  height: 10px;
  background-color: #4284ff;
  transform: translateY(-50%);
  border-radius: 1000px;
  width: ${(props) => `calc((100% - 32px) * ${props.$progress / 100})`};
  z-index: 1;
  transition: width 0.3s ease;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  padding: 0 10px;
  font-size: 12px;
  width: 100%;
`;

const Label = styled.div`
  color: ${(props) => (props.$active ? "#4284ff" : "#aeafb6")};
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  text-align: center;
`;

const ProgressSteps = ({ currentStep = 0 }) => {
  const totalSteps = 4;
  const stepLabels = ["모집중", "모집완료", "결제대기", "배송중"];
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <StepsWrapper>
      <ProgressBarContainer>
        <ProgressBackground />
        <ProgressFill $progress={progress} />
        {[...Array(totalSteps)].map((_, i) => (
          <Step
            key={i}
            $active={i === currentStep}
            $completed={i < currentStep}
          >
            {i === currentStep && <img src={import.meta.env.BASE_URL + "/dot.svg"} alt="현재 단계" />}
            {i < currentStep && <img src={import.meta.env.BASE_URL + "/check.svg"} alt="완료됨" />}
          </Step>
        ))}
      </ProgressBarContainer>
      <Labels>
        {stepLabels.map((label, i) => (
          <Label key={label} $active={i <= currentStep}>
            {label}
          </Label>
        ))}
      </Labels>
    </StepsWrapper>
  );
};

export default ProgressSteps;
