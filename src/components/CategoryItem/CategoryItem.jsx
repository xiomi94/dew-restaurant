import './CategoryItem.css'

function CategoryItem({category, onClickCategory}) {

  return (
    <div className="category-card" onClick={() => {onClickCategory(category)}}>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <p className='category-card-name'>{category.strCategory}</p>
    </div>
  );
}

export default CategoryItem;