import React from "react";

const products = [
  { id: 1, name: "Whey Protein", price: 120 },
  { id: 2, name: "Creatina", price: 80 },
  { id: 3, name: "BCAA", price: 50 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;