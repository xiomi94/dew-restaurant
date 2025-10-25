import { useEffect, useState } from "react"
import CategoryList from "../../components/CategoryList/CategoryList"
import './CategoriesPage.css'

function CategoriesPage() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCategories(data.categories)
      })
  }, [])

  return (
    <>
      <h2 className="categories-page-title">Categorías</h2>
      <CategoryList categoryList={categories}/>
    </>
  );
}

export default CategoriesPage