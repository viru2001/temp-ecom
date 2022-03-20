import { ProductCard } from "../../components";

const ProductList = ({ products }) => {
  return (
    <section id="products" class="d-grid mt-8">
      {products.map(
        ({ id, discountPrice, originalPrice, img, name, tag, savePercent }) => {
          return (
            <ProductCard
              key={id}
              discountPrice={discountPrice}
              originalPrice={originalPrice}
              img={img}
              name={name}
              tag={tag}
              savePercent={savePercent}
            />
          );
        }
      )}
    </section>
  );
};
export { ProductList };
