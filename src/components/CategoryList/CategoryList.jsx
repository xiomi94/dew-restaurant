import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryList.css'

function CategoryList() {
  return (
    <ul className="category-list-container">
        <li><CategoryItem/></li>
        <li><CategoryItem/></li>
        <li><CategoryItem/></li>
    </ul>
  );
}

export default CategoryList;