import {VStack, Text, Pressable, Center} from 'native-base';
import React, {useState} from 'react';
import {colors} from '../constants';
import Price from '../components/Price';
import {restUrls} from '../config';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const cartItem = props => {
  const [count, setCount] = useState(1);
  console.log(
    'props cartItem:>> ' +
      JSON.stringify(props.route.params.pizzaDetails.imageLocation),
  );
  // const pizzaDetails = JSON.stringify(props.route.params);
  console.log(
    'pizzaDetails..>>',
    props.route.params.order.size.size.sizeDetail,
  );
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Image
          source={require('./../assets/icons/VegIcon.png')}
          style={styles.vegStyle}></Image>
        <Image
          style={styles.imageContainer}
          resizeMode="contain"
          source={{
            uri: `${restUrls.baseURL}/api/${props.route.params.pizzaDetails.imageLocation}`,
          }}></Image>
        <View style={{paddingLeft: 10}}>
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            color={colors.black}>
            {props.route.params.pizzaDetails.itemTitle}
          </Text>
          <Text
            style={styles.baseTypeStyle}
            numberOfLines={1}
            color={colors.black}>
            {props.route.params.order.size.size.sizeDetail +
              ' | ' +
              props.route.params.order.size.crust.name}
          </Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={decrement} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity onPress={increment} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Image
            source={require('./../assets/icons/EditIcon.png')}
            style={styles.editStyle}></Image>
          <Text
            style={styles.baseTypeStyle}
            numberOfLines={1}
            color={colors.black}>
            {'₹' + props.route.params.order.size.price}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default cartItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  cardView: {
    // flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
    margin: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 94,
    width: 94,
    borderRadius: 5,
  },
  vegStyle: {
    height: 14,
    width: 14,
    top: 5,
    left: 20,
    zIndex: 1000,
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 16,
  },
  baseTypeStyle: {
    fontWeight: '500',
    fontSize: 14,
  },
  counterContainer: {
    flexDirection: 'row',
    // backgroundColor:"#4223",
    width: 110,
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 6,
  },
  button: {
    // padding: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  countText: {
    marginHorizontal: 15,
    fontSize: 18,
  },
  editStyle: {
    height: 12,
    width: 12,
  },
  thirdContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 50,
  },
});
