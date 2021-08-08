import './ItemlistContainer.css';
import React from "react";
const ItemListContainer = ({title,image,description, price}) => {
  return (
    <div className="items">
      <div>
      <h3>{title}</h3>
      <img src={image}alt="img"/>
      <p>{description}</p>
      </div>
      <h4>${price}</h4>
      <button>Agregar al carrito</button>
    </div>
  );
};
export default ItemListContainer;
