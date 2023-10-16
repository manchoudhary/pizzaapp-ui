import reduce from 'ramda/src/reduce';
import uniqBy from 'ramda/src/uniqBy';
import append from 'ramda/src/append';
import path from 'ramda/src/path';
import pipe from 'ramda/src/pipe';

export default sizes => {
  const getSizeId = path(['size', 'sizeId']);

  const uniqueData = pipe(
    reduce((acc, item) => append(item, acc), []),
    uniqBy(getSizeId),
  )(sizes);

  return uniqueData;
};
