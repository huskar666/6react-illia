import React from "react";
import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  transition: 0.3s;
  border: ${(props) => props.isHard ? "3px solid #ff4d4f" : "none"};

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`;

function RecipeCard({ title, time, servings, calories, difficulty, image }) {
  return (
    <Card isHard={difficulty === 3}>
      <Image src={image} alt={title} />
      <Content>
        <h3>{title}</h3>
        <Info>
          <span>⏱ {time}</span>
          <span>👥 {servings}</span>
          <span>🔥 {calories}</span>
        </Info>
        <Difficulty level={difficulty} />
      </Content>
    </Card>
  );
}

export default RecipeCard;
