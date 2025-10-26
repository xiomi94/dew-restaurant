import { useEffect, useState } from "react"
import CategoryList from "../../components/CategoryList/CategoryList"
import './CategoriesPage.css'
import { LoadingContext } from '../../App'
import { useContext } from 'react';

function CategoriesPage() {

  const [categories, setCategories] = useState([])
  const { setLoading } = useContext(LoadingContext);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Unexpected Error");
        }
        return response.json()
      })
      .catch((error) => {
        setError('No se han podido cargar los datos');
        setLoading(false);
      })
      .then((data) => {
        setCategories(data.categories)
        setLoading(false);
      })
  }, [])

  const renderList = error ? <div>{error}</div> : <CategoryList categoryList={categories}/>;


  return (
    <>
      <h2 className="categories-page-title">Categorías</h2>
      {renderList}
    </>
  );
}

export default CategoriesPage