import React from "react";
import styled from "styled-components";
import { DUMMY_MEALS } from "../../utils/constants";
import MealItem from "./mealItem/MealItem";

const Meals = () => {
  return (
    <Container>
      {DUMMY_MEALS.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;

export default Meals;
