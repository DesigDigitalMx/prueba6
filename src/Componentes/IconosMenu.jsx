import React, { useState, useEffect } from "react";
import { client } from "./Client";

function Iconosmenu({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "categoria",
        order: "fields.order",
      })
      .then((response) => {
        const newCategories = response.items.map((item) => ({
          title: item.fields.tituloCategoria,
          order: item.fields.order,
        }));
        setCategories(newCategories);

        //Encontrar la categoría con orden 1 y establecerla como la categoría seleccionada por defecto
        const firstCategoryWithOrder1 = newCategories.find(
          (category) => category.order === 1
        );
        if (firstCategoryWithOrder1) {
          setSelectedCategory(firstCategoryWithOrder1.title.toLowerCase());
        }
      })
      .catch(console.error);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <div className="iconos_menu">
      {categories.map((category) => (
        <div
          key={category.title}
          className={`${category.title.toLowerCase()}_icon ${
            selectedCategory === category.title.toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category.title)}
        >
          {category.icon && <img src={category.icon} alt={category.title} />}
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Iconosmenu;
