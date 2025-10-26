import MealsItem from "../MealsItem/MealsItem";
import './MealsList.css';

function MealsList({ meals }) {

  const mealsListRender = meals.map((meal) => (
    <li key={meal.idMeal}>
      <MealsItem meal={meal} />
    </li>
  ));

  return (
    <ul className="meals-list-container">
      {mealsListRender}
    </ul>
  );
}

export default MealsList;
