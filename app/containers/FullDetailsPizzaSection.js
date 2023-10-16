import {VStack, FlatList, Stack, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import sortWith from 'ramda/src/sortWith';
import ascend from 'ramda/src/ascend';
import descend from 'ramda/src/descend';
import FullDetailsPizzaItem from './FullDetailsPizzaItem';
import PizzaSectionHeader from './PizzaSectionHeader';
import getPrice from '../utils/getPrice';
import getRegularSize from '../utils/getRegularSize';
import getSizeAbbreviation from '../utils/getSizeAbbreviation';

export default ({
  label,
  fullDetails,
  filter,
  verticalItem,
  pizza,
  viewAll,
  searchText,
  ...props
}) => {
  const {items, loading} = pizza;

  const sortByPrice = sortWith(
    filter?.value === 'l2h'
      ? [descend(item => getPrice(item))]
      : [ascend(item => getPrice(item))],
    items,
  );

  if (loading) {
    return null;
  }

  return (
    <VStack {...props} flex={1}>
      <PizzaSectionHeader
        headerLabel={label}
        viewAll={viewAll}
        containerProps={{ml: 4}}
      />

      <FlatList
        data={filter ? sortByPrice : items}
        horizontal={fullDetails ? false : true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
        renderItem={({item}) => {
          const {itemTitle, description, type, imageLocation} = item;
          const price = getPrice(item);
          const size = getRegularSize(item);

          const sizeText =
            size && `${getSizeAbbreviation(size)} | ${size.size.sizeDetails}`;

          const pizzaItemProps = {my: 2, mr: fullDetails ? 0 : 4};

          return (
            <FullDetailsPizzaItem
              name={itemTitle}
              size={sizeText}
              price={price}
              {...pizzaItemProps}
              {...{imageLocation, type, fullDetails, verticalItem, description}}
            />
          );
        }}
        keyExtractor={(item, index) => `veg-pizza-item-${index}`}
      />
    </VStack>
  );
};
