import {VStack} from 'native-base';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {PageIndicator} from 'react-native-page-indicator';
import FullDetailsPizzaItem from './FullDetailsPizzaItem';
import PizzaSectionHeader from './PizzaSectionHeader';
import getPrice from '../utils/getPrice';
import getRegularSize from '../utils/getRegularSize';
import getSizeAbbreviation from '../utils/getSizeAbbreviation';
import {useWindowDimensions} from 'react-native';

export default ({
  label,
  fullDetails,
  verticalItem,
  pizza,
  viewAll,
  searchText,
  ...props
}) => {
  const {items, loading} = pizza;

  const [currentIndex, setCurrentIndex] = useState();

  const {width: windowWidth} = useWindowDimensions();

  if (loading) {
    return null;
  }

  const handleSnapToItem = index => {
    setCurrentIndex(index);
  };

  return (
    <VStack {...props} flex={1}>
      <PizzaSectionHeader
        headerLabel={label}
        viewAll={viewAll}
        containerProps={{ml: 4}}
      />

      <Carousel
        data={items}
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
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 32}
        onSnapToItem={handleSnapToItem}
      />

      {console.log('snap - change')}

      <PageIndicator count={items.length} current={currentIndex} />
    </VStack>
  );
};
