import "./Products.css";

function ProductCard({

  product,

  cartCount,

  setCartCount

}){

  function addToCart(){

    setCartCount(cartCount + 1);

  }

  return(

<div className="product-card">

    {
      product.sale &&
      <span className="sale">
        SALE
      </span>
    }

<img
src={product.image}
alt={product.name}
/>

<h3>

{product.name}

</h3>

<p>

₹ {product.price}

</p>

<button
onClick={addToCart}
>

Add To Cart

</button>

</div>

  );

}

export default ProductCard;