import React, {useEffect, useState} from 'react';
import {VStack, HStack, Text, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Price from '../../components/Price';
import {colors, screens} from '../../constants';
import {connect} from 'react-redux';
import {getCardData} from './orderDescription.action';

const OrderDescription = ({order, pizzaDetails}) => {
  // order = {};
  const navigation = useNavigation();
  const {size, crust, toppings, orderCnt} = order;
  const [price, setPrice] = useState();

  const getPrice = () => {
    let price = 0;
    if (size) {
      price += parseInt(size.price) * (orderCnt ?? 1);
    }

    (toppings ?? []).map(topping => {
      price += topping?.price * (topping?.qty ?? 1);
    });

    return price;
  };

  useEffect(() => {
    setPrice(getPrice());
  }, [order]);
  const cartScreenKey = screens.inside.bottomTabStack.cart;
  console.log('pizzaDetails>>>', pizzaDetails);
  console.log('order>>>', order);
  return (
    <HStack bg={'white'} shadow={4} flex={1} p={4} alignItems={'flex-end'}>
      <VStack flex={1} alignSelf={'flex-start'}>
        {(size || crust) && (
          <Text>
            {[size?.size?.sizeDetail ?? '', crust?.label ?? ''].join(' | ')}{' '}
          </Text>
        )}
        {toppings && (
          <Text color={colors.black6} fontSize={12}>
            Toppings : {toppings.map(topping => topping.title).join(', ')}{' '}
          </Text>
        )}
        {price && (
          <Price
            price={price}
            iconProps={{width: 10, height: 12, style: {marginTop: 3}}}
            containerProps={{alignItems: 'center'}}
          />
        )}
      </VStack>
      <Pressable
        onPress={() => {
          // props.getCardData(order);
          // navigation.navigate(screens.inside.bottomTabStack.cart(order));
          navigation.navigate(cartScreenKey, {pizzaDetails, order});
        }}
        bg={colors.blue_royal}
        py={2}
        px={2}
        mt={1}
        mb={2}
        mx={4}
        borderRadius={6}>
        <Text color={colors.white} fontWeight={'600'} fontSize={14}>
          Add to cart{' '}
        </Text>
      </Pressable>
    </HStack>
  );
};

const dispatchToProps = dispatch => ({
  getCardData: payload => dispatch(getCardData(payload)),
});
export default connect(dispatchToProps)(OrderDescription);
