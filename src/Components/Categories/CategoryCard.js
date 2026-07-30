import "./Categories.css";

function CategoryCard({ category, onSelect }) {
  return (
    <div
      className="category-card"
      onClick={() => onSelect(category.name)}
    >
      <img src={category.image} alt={category.name} />

      <h3>{category.name}</h3>

      <p>{category.items} Collections</p>
    </div>
  );
}

export default CategoryCard;