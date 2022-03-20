import axios from "axios";
import { useEffect, useState } from "react";
import { Filters } from "../../components";
import { useProduct } from "../../Context/ProductContext";
import { ProductList } from "./ProductList";
import "./Products.css";
const Products = () => {
  const [{products}, ProductDispatch] = useProduct();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        ProductDispatch({ type: "LOAD_PRODUCTS", payload: products });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="wrapper d-grid">
      <Filters />
      <ProductList products={products} />
    </div>
  );
};

export { Products };
