const Filters = () => {
  return (
    <section
      id="filters"
      className="mt-8 mx-6 py-8 px-4 box-shadow-md p-sticky"
    >
      <div className="filter-wrapper p-4">
        <div className="d-flex align-center">
          <h2 className="headline-md">Filters</h2>
          <button
            type="button"
            className="btn btn-clear rounded-sm p-3 ml-auto"
          >
            Clear All
          </button>
        </div>
        {/* price filter  */}
        <h3 className="headline-sm mt-8">Price</h3>
        <div>
          <div className="p-4">
            <input
              type="range"
              id="price"
              name="price"
              className="w-100"
              min="200"
              max="2000"
              value="500"
            />
          </div>
          <div className="d-flex justify-between p-4">
            <span className="text-sm">
              From : <span className="font-wt-semibold"> 200</span>
            </span>
            <span className="text-sm">
              To : <span className="font-wt-semibold"> 2000</span>
            </span>
          </div>
        </div>

        {/* rating filter  */}
        <h3 className="headline-sm mt-8">Ratings</h3>
        <ul className="d-flex flex-col text-sm">
          <li className="pt-2">
            <input
              type="radio"
              id="four-star"
              name="rating"
              value="four-star"
            />
            <label for="four-star">4 stars and above</label>
          </li>
          <li className="pt-2">
            <input
              type="radio"
              id="three-star"
              name="rating"
              value="three-star"
            />
            <label for="three-star">3 stars and above</label>
          </li>
          <li className="pt-2">
            <input type="radio" id="two-star" name="rating" value="two-star" />
            <label for="two-star">2 stars and above</label>
          </li>
        </ul>

        {/* category filter  */}
        <h3 className="headline-sm mt-8">Category</h3>
        <ul className="d-flex flex-col text-sm">
          <li className="pt-2">
            <input type="checkbox" id="monitor" name="monitor" />
            <label for="monitor">Monitor</label>
          </li>
          <li className="pt-2">
            <input type="checkbox" id="chairs" name="chairs" />
            <label for="chairs">Gaming Chairs</label>
          </li>
          <li className="pt-2">
            <input type="checkbox" id="headphone" name="headphone" />
            <label for="headphone">Headphones</label>
          </li>
          <li className="pt-2">
            <input type="checkbox" id="keyboard" name="keyboard" />
            <label for="keyboard">Keyboard</label>
          </li>
          <li className="pt-2">
            <input type="checkbox" id="mouse" name="mouse" />
            <label for="mouse">Mouse</label>
          </li>
        </ul>

        {/* sort by price */}
        <h3 className="headline-sm mt-8">Sort By</h3>
        <ul className="d-flex flex-col text-sm">
          <li className="pt-2">
            <input
              type="radio"
              id="high-to-low"
              name="sort-by"
              value="high-to-low"
            />
            <label for="high-to-low">Price High to Low</label>
          </li>
          <li className="pt-2">
            <input
              type="radio"
              id="low-to-high"
              name="sort-by"
              value="low-to-high"
            />
            <label for="low-to-high">Price Low to High</label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Filters };
