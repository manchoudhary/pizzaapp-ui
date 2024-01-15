import React, {useEffect, useState} from 'react';
import {Center, HStack, Pressable, Text} from 'native-base';
import CarouselPizzaSection from '../../containers/CarouselPizzaSection';
import {connect, useDispatch, useSelector} from 'react-redux';
import CartItems from '../../containers/CartItems';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrinkSection} from '../../containers';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
// import CustomIcon from '../../theme/icons/icon';
import CustomIcon from '../../theme/icons/icon';
import {colors} from '../../constants';
import {getBeverages} from '../Home/home.actions';
import {useAppAccessor} from '../../hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
const Cart = props => {
  // const {beverages} = getHome();
  const navigation = useNavigation();
  // const {getHome} = useAppAccessor();
  const[beverages,setBeverageData] =useState([])
  const dispatch =useDispatch()
  // console.log('in side card>>>>', props);
  // const store = useSelector((state) => state.orderDescription)
  // console.log("store",store)

  useEffect(() => {
    async function callAPI() {
     let res= await dispatch(getBeverages());
     console.log("res>>",res)
     setBeverageData(res)
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
      <View style={styles.paymentContainer}>
        <TouchableOpacity style={styles.couponButton}>
          <Image
            source={require('./../../assets/icons/couponIcon.png')}
            style={styles.couponImgStyle}></Image>
          <Text style={styles.couponText}>Apply Coupon</Text>
          <View style={{alignItems: 'flex-end', width: '55%'}}>
            <Icon name={'angle-right'} size={20} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.summaryItem}>
          <Text>Sub Total</Text>
          <Text>₹ {props?.route?.params?.order?.size?.price}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text>Discount</Text>
          <Text>₹ 0.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text>Taxes and Charges</Text>
          <Text>₹ 100</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.summaryItem}>
          <Text style={styles.grandTotalText}>Grand Total</Text>
          <Text style={styles.grandTotalAmount}>
            ₹ {props?.route?.params?.order?.size?.price + 100}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.deliveryText}>Add Delivery Instructions</Text>
        <View style={styles.horizontalLine}></View>
      </TouchableOpacity>
      {/* <DrinkSection label={'Drinks'} mt={3} viewAll {...{beverages}} /> */}
      <View style={styles.buttonContainer}>
        <Text style={styles.btnText}>Select / Add Address</Text>
      </View>
    </View>
  );
};
// const stateToProps = state => {
//   return {
//   };
//     cartData: state.orderDescription.cartData,
// };
// export default connect(stateToProps)(Cart);
export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paymentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    margin: 16,
  },
  couponButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 7,
    borderColor: '#D9D9D',
  },
  couponText: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 8,
  },
  grandTotalText: {
    fontWeight: 'bold',
  },
  grandTotalAmount: {
    fontWeight: 'bold',
  },
  couponImgStyle: {
    height: 24,
    width: 24,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: 600,
    paddingLeft: 20,
    color: '#1E5E77',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E5E77',
    width: '45%',
    marginLeft: 20,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#1E5E77',
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontWeight: '600',
    color:"#fff"
  },
});
