import React from "react";
import styled from "styled-components";
const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;
const Card = (props) => {
  const propClasses = props.className;
  CardWrapper.className = propClasses;
  return (
    <CardWrapper className={`${props.className}`}>{props.children}</CardWrapper>
  );
};
export default Card;
