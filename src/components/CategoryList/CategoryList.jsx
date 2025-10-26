import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryList.css'

function CategoryList({ categoryList, onClickCategory }) {

  const categoryListRender = categoryList.map((category) => {
    return <li key={category.idCategory}>
      <CategoryItem category={category} onClickCategory={onClickCategory} />
    </li>
  })

  return (
    <ul className="category-list-container">
      {categoryListRender}
    </ul>
  );
}

export default CategoryList;