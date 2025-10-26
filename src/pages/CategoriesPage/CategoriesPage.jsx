import { useEffect, useState } from "react"
import CategoryList from "../../components/CategoryList/CategoryList"
import './CategoriesPage.css'
import { LoadingContext } from '../../App'
import { useContext } from 'react';
import { useNavigate } from "react-router";

function CategoriesPage() {

  const [categories, setCategories] = useState([])
  const { setLoading } = useContext(LoadingContext);
  const [ error, setError ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
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
        setCategories(data.categories)
        setLoading(false);
      })
  }, [])

  const onClickCategory = (category) => {
    navigate(`/meals?category=${category.strCategory}`)
  }

  const renderList = error ? <div>{error}</div> : <CategoryList categoryList={categories} onClickCategory={onClickCategory}/>;


  return (
    <>
      <h2 className="categories-page-title">Categorías</h2>
      {renderList}
    </>
  );
}

export default CategoriesPage