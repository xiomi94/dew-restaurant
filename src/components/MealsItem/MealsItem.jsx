import './MealsItem.css';

function MealsItem({ meal }) {
  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-card-image"
      />
      <p className="meal-card-name">{meal.strMeal}</p>
      <p className="meal-card-price">{meal.price} €</p>
    </div>
  );
}

export default MealsItem;
