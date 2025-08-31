import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import RecipeCard from "./components/RecipeCard";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #fff7e6;
    margin: 0;
    padding: 20px;
  }
`;

const recipes = [
  {
    id: 1,
    title: "Smoked salmon burger",
    time: "20 min",
    servings: "6 servings",
    calories: "210 calories",
    difficulty: 0,
    image: "https://www.bonappeteach.com/wp-content/uploads/2022/08/Smoked-Salmon-Burgers-14.jpg"
  },
  {
    id: 2,
    title: "Tomatoes With Creamy Feta",
    time: "15 min",
    servings: "3 servings",
    calories: "600 calories",
    difficulty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbior8damh5OrkSj9qsqE0da5IucAx7n0Sqw&s"
  },
  {
    id: 3,
    title: "Spicy potato salad",
    time: "30 min",
    servings: "2 servings",
    calories: "320 calories",
    difficulty: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVYuwv_AahrjrMzH7drx7jKlKAaX3NOxWzw&s"
  },
  {
    id: 4,
    title: "Chicken Biryani",
    time: "40 min",
    servings: "4 servings",
    calories: "700 calories",
    difficulty: 3,
    image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg"
  }
];

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>список рецептів</h1>
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </RecipeList>
    </>
  );
}

export default App;
