export default pizza => {
  if (pizza.itemSizeMappings) {
    if (
      pizza.itemSizeMappings.length === 1 &&
      pizza.itemSizeMappings[0].price
    ) {
      return pizza.itemSizeMappings[0];
    }

    const regularSize = pizza.itemSizeMappings.find(
      item => item.size?.sizeId === 1,
    );

    if (regularSize) {
      return regularSize;
    }

    return null;
  }

  return null;
};
