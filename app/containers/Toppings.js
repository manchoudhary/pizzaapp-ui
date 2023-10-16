import React, {useState} from 'react';
import {VStack, Text, HStack, Stack, Pressable, Divider} from 'native-base';
import CustomIcon from '../theme/icons/icon';
import {colors} from '../constants';
import Price from '../components/Price';
import PizzaName from '../components/PizzaName';

export default function Toppings({toppings, onSelectTopping}) {
  const {vegToppings = [], nonVegToppings = []} = toppings;

  const [vegToppingsState, setVegToppingsState] = useState(vegToppings);
  const [nonVegToppingsState, setNonVegToppingsState] =
    useState(nonVegToppings);

  const updateTopping = (type, id, action) => {
    const getUpdatedTopping = (topping, action) => {
      if (action === 'select') {
        return {
          ...topping,
          selected: !(topping.selected ?? false),
        };
      } else if (action === 'qty') {
        return {
          ...topping,
          qty: (topping.qty ?? 1) + 1,
        };
      }
    };
    if (type === 'veg') {
      setVegToppingsState(
        vegToppingsState.map(topping => {
          if (topping.toppingId == id) {
            return getUpdatedTopping(topping, action);
          }
          return topping;
        }),
      );
    } else {
      setNonVegToppingsState(
        nonVegToppingsState.map(topping => {
          if (topping.toppingId == id) {
            return getUpdatedTopping(topping, action);
          }
          return topping;
        }),
      );
    }
  };

  const ToppingItem = ({type, topping}) => {
    return (
      <HStack mx={1} my={2}>
        <HStack flex={1} alignItems={'center'}>
          <Pressable
            bg={topping.selected && colors.green}
            borderWidth={1}
            borderColor={topping.selected ? colors.green : colors.black3}
            w={4}
            h={4}
            borderRadius={2}
            alignItems={'center'}
            justifyContent={'center'}
            onPress={() => {
              updateTopping(type, topping.toppingId, 'select');
              onSelectTopping(topping, 'select');
            }}>
            {topping.selected && (
              <CustomIcon
                name={'TickIcon'}
                width={16}
                height={16}
                fill={'transparent'}
                stroke={colors.white}
              />
            )}
          </Pressable>
          <Text ml={2}>{topping.title}</Text>
        </HStack>

        <HStack>
          <Pressable
            mr={2}
            onPress={() => {
              if (!topping.selected) return;
              updateTopping(type, topping.toppingId, 'qty');
              onSelectTopping(
                {
                  ...topping,
                  qty: (topping.qty ?? 1) + 1,
                },
                'qty',
              );
            }}>
            <Text fontSize={20} lineHeight={20}>
              +
            </Text>
          </Pressable>
          <Price
            price={topping.price * (topping.qty ?? 1)}
            textProps={{fontSize: 13, fontWeight: 'normal'}}
            iconProps={{width: 9, height: 11}}
          />
        </HStack>
      </HStack>
    );
  };

  return (
    <VStack mx={4} mt={3}>
      <Text color={colors.black8}>Choose your pizza toppings</Text>
      <Stack ml={1} mt={2}>
        <PizzaName
          name={'Add Veg Toppings'}
          textProps={{fontWeight: '600'}}
          iconProps={{}}
        />
      </Stack>
      <VStack>
        {vegToppingsState.map(topping => {
          return <ToppingItem {...{type: 'veg', topping}} />;
        })}
      </VStack>

      <Divider
        bg={'#858585'}
        thickness={0.5}
        my={6}
        w={'40%'}
        alignSelf={'center'}
      />

      <Stack ml={1}>
        <PizzaName
          type={false}
          name={'Add Non - Veg Toppings'}
          textProps={{fontWeight: '600'}}
        />
      </Stack>
      <VStack>
        {nonVegToppingsState.map(topping => {
          return <ToppingItem {...{type: 'non-veg', topping}} />;
        })}
      </VStack>
    </VStack>
  );
}
