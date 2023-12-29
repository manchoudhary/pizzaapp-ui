import React, {useEffect, useState} from 'react';
import {Center, HStack, Pressable, Text} from 'native-base';
import CarouselPizzaSection from '../../containers/CarouselPizzaSection';
import {connect} from 'react-redux';
import CartItems from '../../containers/CartItems';
import {StyleSheet, View} from 'react-native';
import {DrinkSection} from '../../containers';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
// import CustomIcon from '../../theme/icons/icon';
import CustomIcon from '../../theme/icons/icon';
import {colors} from '../../constants';
import {getBeverages} from '../Home/home.actions';
import {useAppAccessor} from '../../hooks';
const Cart = props => {
  const {beverages} = getHome();
  const navigation = useNavigation();
  const {getHome} = useAppAccessor();
  console.log('in side card>>>>', props);
  useEffect(() => {
    async function callAPI() {
      await dispatch(getBeverages());
    }

    callAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        left={
          <HStack alignItems={'center'}>
            <Pressable onPress={() => navigation.goBack()}>
              <CustomIcon name={'BackIcon'} width={14} height={14} />
            </Pressable>
            <Text color={colors.black} fontSize={20} ml={2}>
              {'Cart'}
            </Text>
          </HStack>
        }
        right={
          <Pressable
            justifyContent={'center'}
            onPress={() => navigation.navigate(screens.inside.search)}>
            <CustomIcon
              name={'SearchIcon'}
              width={20}
              height={20}
              fill={'transparent'}
              stroke={'#1E5E77'}
            />
          </Pressable>
        }
        my={2}
      />
      <CartItems
        {...props}
        // {...{imageLocation, fullDetails}}
      />
      <DrinkSection label={'Drinks'} mt={3} viewAll {...{beverages}} />
    </View>
  );
};
// const stateToProps = state => {
//   return {
//     cartData: state.orderDescription.cartData,
//   };
// };
// export default connect(stateToProps)(Cart);
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
