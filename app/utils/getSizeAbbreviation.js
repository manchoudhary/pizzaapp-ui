export default ({size}) => {
  if (size.sizeId === 1) {
    return 'R';
  }
  if (size.sizeId === 2) {
    return 'M';
  }
  if (size.sizeId === 3) {
    return 'L';
  }

  return '';
};
