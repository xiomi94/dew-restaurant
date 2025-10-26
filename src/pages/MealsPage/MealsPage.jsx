import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { LoadingContext } from "../../App";
import MealsList from "../../components/MealsList/MealsList";
import './MealsPage.css';

function MealsPage() {

  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  const { setLoading } = useContext(LoadingContext);

  const goBackToCategories = () => {
    navigate('/categories');
  };

  const checkIfCategoryParamExist = () => {
    const categoryParam = params.get('category');
    if (!categoryParam) {
      navigate('/categories')
    }
  }

  const loadData = () => {
    const categoryParam = params.get('category');
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryParam}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unexpected Error");
        }
        return response.json()
      })
      .catch(() => {
        setError('No se han podido cargar los datos');
        setLoading(false);
      })
      .then((data) => {
        const meals = data.meals.map((item) => {
          return {
            ...item,
            price: Math.round((Math.random() * (1 - 50) + 50) * 100) / 100,
          }
        })
        setMeals(meals);
        setLoading(false);
      })
  }

  useEffect(() => {
    checkIfCategoryParamExist();
    loadData();
  }, []);

  const renderList = error ? <div>{error}</div> : <MealsList meals={meals} />;

  return (
    <>
      <h2 className="meals-page-title">
        {params.get("category")}
      </h2>
      <button onClick={goBackToCategories} className="back-button">←</button>
      {renderList}
    </>
  );

}

export default MealsPage;