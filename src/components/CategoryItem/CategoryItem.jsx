import './CategoryItem.css'

function CategoryItem() {
  return (
    <div className="category-card">
      <img src="https://www.themealdb.com/images/category/beef.png" alt="meat" />
      <p>Category name: Meat</p>
    </div>
  );
}

export default CategoryItem;