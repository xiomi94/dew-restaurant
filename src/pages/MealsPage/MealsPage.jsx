import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { LoadingContext } from "../../App";

function MealsPage() {

  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [ error, setError ] = useState(null);
  const [ meals, setMeals ] = useState([]);
  const { setLoading } = useContext(LoadingContext);

  const checkIfCategoryParamExist = () => {
    const categoryParam = params.get('category');
    if (!categoryParam) {
      navigate('/categories')
    }
  }

  const loadData = () => {
    const categoryParam = params.get('category');
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

  return (
    <>
    
    </>
  );
}

export default MealsPage;