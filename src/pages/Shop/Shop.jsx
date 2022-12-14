import React, { createContext, useEffect, useState } from "react";
import FilterProduct from "../../components/elements/FilterProduct/elements/FilterProduct";
import { HeaderPage } from "../../components/index";
import CardProduct4 from "../../components/products/CardProduct4/CardProduct4";
import Companies from "../../components/sections/Companies/Companies";
import "./shop.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // fetch data products
  async function fetchData() {
    let data = await fetch("server/products.json");
    setProducts(await data.json());
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="shop">
      <HeaderPage title="Shop" />
      <FilterProduct products={products} setProducts={setProducts} />
      <div className="container">
        <div className="row products">
          {products.map((product) => (
            <CardProduct4
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              priceOld={product.price_old}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Companies />
    </div>
  );
};

export default Shop;
