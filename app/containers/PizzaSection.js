import {VStack, FlatList, Spinner, Stack} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import PizzaItem from './PizzaItem';
import PizzaSectionHeader from './PizzaSectionHeader';
import getPrice from '../utils/getPrice';
import {screens} from '../constants';

export default ({
  label,
  description,
  pizza,
  parentPizzaType,
  viewAll,
  numColumn = 1,
  ...props
}) => {
  const navigation = useNavigation();

  const {loading, items} = pizza;

  if (loading) {
    return null;
  }

  return (
    <VStack ml={4} {...props}>
      <PizzaSectionHeader
        headerLabel={label}
        {...{description}}
        viewAll={viewAll}
      />

      <FlatList
        data={items}
        horizontal={numColumn > 1 ? false : true}
        numColumns={numColumn}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          const {type, itemTitle, description, imageLocation} = item;
          const price = getPrice(item);

          let containerProps = {};

          if (numColumn > 1) {
            containerProps = {
              w: 'full',
              flex: 1,
            };
          }

          return (
            <PizzaItem
              name={itemTitle}
              price={price}
              mt={2}
              mr={4}
              onPress={() => {
                navigation.navigate(screens.inside.productDetails, {
                  pizzaDetails: item,
                });
              }}
              {...containerProps}
              {...{imageLocation, type: parentPizzaType ?? type, description}}
            />
          );
        }}
        keyExtractor={(item, index) => `veg-pizza-item-${index}`}
      />
    </VStack>
  );
};
