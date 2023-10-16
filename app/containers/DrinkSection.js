import {VStack, FlatList} from 'native-base';
import React from 'react';
import DrinkItem from './DrinkItem';
import PizzaSectionHeader from './PizzaSectionHeader';
import getPrice from '../utils/getPrice';

export default ({label, beverages, fullDetails, viewAll, ...props}) => {
  const {items, loading} = beverages;

  if (loading) {
    return null;
  }

  return (
    <VStack {...props}>
      <PizzaSectionHeader
        headerLabel={label}
        viewAll={viewAll}
        containerProps={{ml: 4}}
      />

      <FlatList
        data={items}
        numColumns={fullDetails ? 2 : 1}
        horizontal={fullDetails ? false : true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
        renderItem={({item}) => {
          const {itemTitle, imageLocation} = item;
          const price = getPrice(item);

          return (
            <DrinkItem
              name={itemTitle}
              price={price}
              mt={2}
              mr={4}
              {...{imageLocation, fullDetails}}
            />
          );
        }}
        keyExtractor={(item, index) => `veg-pizza-item-${index}`}
      />
    </VStack>
  );
};
