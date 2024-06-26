import styled from "styled-components";

export const topicStyles = {
  _purple: {
    backgroundColor: (props) => props.theme.backgroundPurple,
    color: (props) => props.theme.colorPurple,
  },
  _orange: {
    backgroundColor: (props) => props.theme.backgroundOrange,
    color: (props) => props.theme.colorOrange,
  },
  _green: {
    backgroundColor: (props) => props.theme.backgroundGreen,
    color: (props) => props.theme.colorGreen,
  },
  _gray: {
    backgroundColor: (props) => props.theme.backgroundGrey,
    color: (props) => props.theme.colorGrey,
  },
};

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
export const CardCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.backgroundBlock};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  width: 100%;
  display: block;
  position: relative;
`;
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) =>
    topicStyles[props.$theme]?.backgroundColor ||
    topicStyles._gray.backgroundColor};
  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) =>
      topicStyles[props.$theme]?.color || topicStyles._gray.color};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.color};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }

  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;
