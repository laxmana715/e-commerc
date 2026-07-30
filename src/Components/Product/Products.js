import { useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

function Products({
  products,
  cartCount,
  setCartCount
}) {

  const [search, setSearch] = useState("");

  // Added optional chaining (?.) and a fallback empty array ([])
  const filteredProducts =
    products?.filter((item) =>
      item.name.toLowerCase().includes(
        search.toLowerCase()
      )
    ) || [];

  return (

    <section className="products">

      <h2>Featured Products</h2>

      <input
        className="search-product"
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="product-container">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item)=>(
            <ProductCard
              key={item.id}
              product={item}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}

      </div>

    </section>

  );

}

export default Products;