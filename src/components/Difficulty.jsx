import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  color: white;
  background-color: ${(props) =>
    props.level === 0 ? "#52c41a" : props.level === 1 ? "#faad14" : "#ff4d4f"};
`;

function Difficulty({ level }) {
  const labels = ["Easy", "Medium", "Hard"];
  return (
    <Wrapper>
      <p>Difficulty:</p>
      <Badge level={level}>{labels[level]}</Badge>
    </Wrapper>
  );
}

export default Difficulty;
