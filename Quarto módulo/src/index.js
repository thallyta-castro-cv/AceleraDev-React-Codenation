const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {
  const filteredList = productsList.filter((p) => ids.includes(p.id));
  const products = filteredList.map((p) => ({
    name: p.name,
    category: p.category,
  }));

  function promotionLook(quantityLooks) {
    return promotions[quantityLooks - 1];
  }
  
  const categories = filteredList.reduce((accumulator, product) => {
    return accumulator.includes(product.category)
      ? accumulator
      : [...accumulator, product.category];
  }, []);

  const promotion = promotionLook(categories.length);

  const totalPrice = filteredList.reduce((accumulator, product) => {
    const pricePromotion = product.promotions.find((p) =>
      p.looks.includes(promotion)
    );


    if (pricePromotion) return accumulator + pricePromotion.price;

   
    return accumulator + product.regularPrice;
  }, 0);

  const regularPrice = filteredList.reduce((accumulator, product) => {
    return accumulator + product.regularPrice;
  }, 0);

  const discountValue = regularPrice - totalPrice;

  const discount = (discountValue * 100) / regularPrice;
  const result = {
    products,
    promotion,
    totalPrice: totalPrice.toFixed(2),
    discountValue: discountValue.toFixed(2),
    discount: `${discount.toFixed(2)}%`,
  };

  return result;
}

module.exports = { getShoppingCart };