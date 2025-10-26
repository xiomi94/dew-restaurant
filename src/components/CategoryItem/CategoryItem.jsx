import './CategoryItem.css'

function CategoryItem({category}) {
  return (
    <div className="category-card">
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <p className='category-card-name'>{category.strCategory}</p>
    </div>
  );
}

export default CategoryItem;