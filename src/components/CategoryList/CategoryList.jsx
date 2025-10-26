import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryList.css'

function CategoryList({ categoryList }) {

  const categoryListRender = categoryList.map((category) => {
    return <li key={category.idCategory}><CategoryItem category={category}/></li>
  })

  return (
    <ul className="category-list-container">
        {categoryListRender}
    </ul>
  );
}

export default CategoryList;