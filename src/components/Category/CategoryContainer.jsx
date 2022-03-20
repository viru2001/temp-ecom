import { Link } from "react-router-dom";
import {
  MonitorCategoryImg,
  ChairCategoryImg,
  MouseCategoryImg,
  HeadphonesCategoryImg,
  KeyboardCategoryImg
} from "../../assets";
import { CategoryCard } from "./CategoryCard";
import "./Category.css";
const CategoryContainer = () => {
  return (
    <>
      <h2 className="headline-lg text-center my-8" id="featured-heading">
        Featured Categories
      </h2>

      <section className="d-flex flex-wrap justify-around">
        <Link to="/products" className="text-dec-none">
          <CategoryCard
            img={MonitorCategoryImg}
            categoryName={"Monitors"}
            imgAltText={"monitor image"}
            imgId={"monitor-img"}
          />
        </Link>
        <Link to="/products" className="text-dec-none">
          <CategoryCard
            img={ChairCategoryImg}
            categoryName={"Gaming Chairs"}
            imgAltText={"chair image"}
            imgId={"chair-img"}
          />
        </Link>
        <Link to="/products" className="text-dec-none">
          <CategoryCard
            img={KeyboardCategoryImg}
            categoryName={"Keyboards"}
            imgAltText={"keyboard image"}
            imgId={"keyboard-img"}
          />
        </Link>
        <Link to="/products" className="text-dec-none">
          <CategoryCard
            img={HeadphonesCategoryImg}
            categoryName={"Headphones"}
            imgAltText={"headphones image"}
            imgId={"headphone-img"}
          />
        </Link>

        <Link to="/products" className="text-dec-none">
          <CategoryCard
            img={MouseCategoryImg}
            categoryName={"Mouse"}
            imgAltText={"Mouse image"}
            imgId={"mouse-img"}
          />
        </Link>
      </section>
    </>
  );
};

export { CategoryContainer };
