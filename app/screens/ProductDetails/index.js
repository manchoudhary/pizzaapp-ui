import React, {useEffect, useState} from 'react';
import {
  VStack,
  Text,
  Image,
  ScrollView,
  Pressable,
  Divider,
  HStack,
} from 'native-base';
import filter from 'ramda/src/filter';
import find from 'ramda/src/find';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomIcon from '../../theme/icons/icon';
import PizzaName from '../../components/PizzaName';
import {colors} from '../../constants';
import StepCounter from '../../containers/StepCounter';
import PizzaSizeSelector from '../../containers/PizzaSizeSelector';
import {ToggleSelector} from '../../containers';
import getCrustFromSize from '../../utils/getCrustFromSize';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchToppings} from './productDetails.actions';
import {useAppAccessor} from '../../hooks';
import Toppings from '../../containers/Toppings';
import OrderCounter from '../../containers/OrderCounter';
import OrderDescription from '../OrderDescription';

const steps = {
  SIZE: 1,
  CRUST: 2,
  TOPPINGS: 3,
  ORDER: 4,
};

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {getProductDetails} = useAppAccessor();

  const {pizzaDetails} = route.params;
  const {itemTitle, description, type, itemSizeMappings} = pizzaDetails;
  const crusts = getCrustFromSize(itemSizeMappings);
  const {
    toppings: {loading, items: toppingItems},
  } = getProductDetails();

  const [currentStep, setCurrentStep] = useState(steps.SIZE);
  const [order, setOrder] = useState();

  useEffect(() => {
    dispatch(fetchToppings());
  }, []);

  const CrustSelector = () => {
    return (
      <>
        <Text ml={4} color={colors.black8}>
          {'Which crust do you prefer? '}
        </Text>
        <ToggleSelector
          data={crusts}
          active={order?.crust}
          col={2}
          onSelect={crust => {
            setOrder(order => {
              return {
                ...order,
                crust,
              };
            });
            setCurrentStep(steps.TOPPINGS);
          }}
          containerProps={{m: 0, mx: 2}}
          itemContainerProps={{py: 3, mx: 2, my: 2}}
        />
      </>
    );
  };

  const handleOnChangeTopping = (topping, action) => {
    setCurrentStep(steps.ORDER);
    setOrder(order => {
      let updatedToppings = [];

      if (action === 'qty') {
        updatedToppings = [
          ...filter(
            item => item.toppingId != topping.toppingId,
            order?.toppings ?? [],
          ),
          topping,
        ];
      }

      if (action === 'select') {
        if (
          find(
            item => item.toppingId === topping.toppingId,
            order?.toppings ?? [],
          )
        ) {
          updatedToppings = [
            ...filter(
              item => item.toppingId != topping.toppingId,
              order?.toppings ?? [],
            ),
          ];
        } else {
          updatedToppings = [...(order?.toppings ?? []), topping];
        }
      }

      return {
        ...order,
        toppings: updatedToppings,
      };
    });
  };
  return (
    <VStack flex={1} bg={'white'}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/static/p-1.png')}
            w={'full'}
            h={240}
            alt={'pizza-image'}
          />

          <Pressable
            p={4}
            onPress={() => navigation.goBack()}
            position={'absolute'}>
            <CustomIcon
              name={'CloseCircle'}
              width={24}
              height={24}
              fill={'transparent'}
              stroke={'white'}
            />
          </Pressable>

          <VStack ml={4} mt={4}>
            <PizzaName
              {...{name: itemTitle, type}}
              textProps={{fontSize: 16}}
            />
            {description && (
              <Text
                fontSize={12}
                color={colors.black8}
                fontWeight={'400'}
                numberOfLines={2}
                mt={2}>
                {`${description} `}
              </Text>
            )}
          </VStack>

          <Divider bg={'#858585'} thickness={0.5} my={4} />

          <StepCounter stepsCount={4} currentStep={currentStep} />

          {currentStep >= steps.SIZE && (
            <PizzaSizeSelector
              {...{itemSizeMappings}}
              onSelect={item => {
                setOrder(order => {
                  return {
                    ...order,
                    size: item,
                  };
                });
                setCurrentStep(steps.CRUST);
              }}
            />
          )}

          {currentStep >= steps.CRUST && <CrustSelector />}

          {currentStep >= steps.TOPPINGS && (
            <Toppings
              toppings={toppingItems}
              onSelectTopping={handleOnChangeTopping}
            />
          )}

          {currentStep >= steps.TOPPINGS && (
            <OrderCounter
              onChange={orderCnt => {
                setCurrentStep(steps.ORDER);
                setOrder(order => {
                  return {
                    ...order,
                    orderCnt,
                  };
                });
              }}
            />
          )}
        </ScrollView>

        {order && (
          <HStack>
            <OrderDescription {...{pizzaDetails}} {...{order}} />
          </HStack>
        )}
      </SafeAreaView>
    </VStack>
  );
}
