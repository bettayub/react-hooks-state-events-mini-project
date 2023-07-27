import React from "react";

function CategoryFilter({ categories, onCategoryClick }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === onCategoryClick ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
