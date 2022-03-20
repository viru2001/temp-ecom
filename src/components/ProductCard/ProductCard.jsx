const ProductCard = ({  discountPrice, originalPrice, img, name, tag, savePercent }) => {
  return (
    <div class="card-wrapper product-card place-center">
      {tag === "" ? null : <span class="vertical-card-badge text-sm p-3 p-relative">{tag}</span>}
      <div class="px-4">
        <img
          class="img-responsive d-block m-auto product-card-img"
          src={img}
          alt="headphone"
        />
      </div>
      <div class="p-2">
        <p class="font-wt-bold text-center text-sm">{name}</p>
      </div>
      <div class="px-8 py-2">
        <div class="product-price-wrapper">
          <span class="product-discount-price text-sm font-wt-bold">
            {`Rs. ${discountPrice}`}
          </span>
          <span class="product-original-price text-sm ml-6">{`Rs. ${originalPrice}`}</span>
        </div>
        <span class="product-discount font-wt-bold text-sm">{`Save ${savePercent}%`}</span>
      </div>
      <div class="card-btns-wrapper p-3 d-flex flex-col">
        <button
          type="button"
          class="btn btn-primary rounded-sm text-sm p-3 mx-4"
        >
          <i class="fas fa-shopping-cart mr-3"></i>
          Add to Cart
        </button>
        <button
          type="button"
          class="btn btn-outline btn-primary-outline rounded-sm text-sm p-3 mx-4"
        >
          <i class="fas fa-heart mr-3"></i>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
export { ProductCard };
