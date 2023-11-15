import React, {useEffect, useState} from 'react';
import {HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Popover from 'react-native-popover-view';
import CustomIcon from '../../theme/icons/icon';
import {colors, menuTypes, priceFilterTypes, screens} from '../../constants';
import Header from '../../components/Header';
import {
  DrinkSection,
  FullDetailsPizzaSection,
  ToggleSelector,
} from '../../containers';
import {useAppAccessor} from '../../hooks';

export default function MenuList() {
  const {getHome} = useAppAccessor();
  const navigation = useNavigation();

  const {vegPizza, nonVegPizza, beverages, currentMenu} = getHome();

  const [currentMenuType, setCurrentMenuType] = useState(currentMenu);
  const [currentFilter, setCurrentFilter] = useState(priceFilterTypes[0]);

  useEffect(() => {
    setCurrentMenuType(currentMenu);
  }, [currentMenu]);

  const FilterContainer = () => {
    return (
      <Popover
        from={
          <Pressable
            bg={'black'}
            my={4}
            mr={4}
            w={7}
            borderRadius={6}
            alignItems={'center'}
            justifyContent={'center'}>
            <CustomIcon
              name={'FilterIcon'}
              width={26}
              height={26}
              fill={'transparent'}
              stroke={'white'}
            />
          </Pressable>
        }>
        <VStack>
          {priceFilterTypes.map(filter => {
            return (
              <Pressable
                px={4}
                py={2}
                onPress={() => {
                  setCurrentFilter(filter);
                }}
                bg={
                  currentFilter.value === filter.value
                    ? '#DDEDF3'
                    : 'transparent'
                }>
                <Text>{`${filter.label} `}</Text>
              </Pressable>
            );
          })}
        </VStack>
      </Popover>
    );
  };

  return (
    <VStack flex={1} bg={colors.white}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          left={
            <HStack alignItems={'center'}>
              <Pressable onPress={() => navigation.goBack()}>
                <CustomIcon name={'BackIcon'} width={14} height={14} />
              </Pressable>
              <Text color={colors.black} fontSize={20} ml={2}>
                {'Pizzaroma Menu '}
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

        <HStack>
          <HStack flex={1}>
            <ToggleSelector
              data={menuTypes}
              active={currentMenuType}
              onSelect={item => setCurrentMenuType(item)}
            />
          </HStack>
          <FilterContainer />
        </HStack>

        <Text ml={4} color={colors.black6} fontSize={14}>
          {'Which pizza are you craving for? '}
        </Text>

        <ScrollView showsVerticalScrollIndicators={false}>
          {currentMenuType.value === 'veg' && (
            <FullDetailsPizzaSection
              mt={3}
              verticalItem
              fullDetails
              showSize
              filter={currentFilter}
              {...{pizza: vegPizza}}
            />
          )}

          {currentMenuType.value === 'non-veg' && (
            <FullDetailsPizzaSection
              mt={3}
              verticalItem
              fullDetails
              {...{pizza: nonVegPizza}}
            />
          )}

          {currentMenuType.value === 'beverages' && (
            <DrinkSection mt={3} {...{beverages}} fullDetails />
          )}
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
}
