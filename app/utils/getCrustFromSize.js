import reduce from 'ramda/src/reduce';
import uniqBy from 'ramda/src/uniqBy';
import append from 'ramda/src/append';
import path from 'ramda/src/path';
import pipe from 'ramda/src/pipe';

export default sizes => {
  const getCrustId = path(['crust', 'crustId']);

  const uniqueData = pipe(
    reduce((acc, item) => append(item, acc), []),
    uniqBy(getCrustId),
  )(sizes);

  return uniqueData.map(item => {
    const {crustId, name} = item.crust;
    return {
      label: name,
      value: crustId,
    };
  });
};
