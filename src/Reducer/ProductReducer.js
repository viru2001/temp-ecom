const ProductInitialState = {
  products: [],
  filters: { sortBy: "", categories: [] },
};

const ProductReducer = (productState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS":
      return { ...productState, products: payload };
  }
};

export { ProductInitialState, ProductReducer };
