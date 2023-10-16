import React, {useEffect, useState} from 'react';
import {VStack, HStack, Text, ScrollView, Pressable} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  LocationSelector,
  ToggleSelector,
  PizzaSection,
  DrinkSection,
  FullDetailsPizzaSection,
} from '../../containers';
import Header from '../../components/Header';
import {
  defaultLocation,
  foodCollectionOptions,
  colors,
  screens,
} from '../../constants';
import CustomIcon from '../../theme/icons/icon';
import {useDispatch} from 'react-redux';
import {
  getBeverages,
  getNonVegPizza,
  getRecommended,
  getTodaySpecial,
  getVegPizza,
} from './home.actions';
import {useAppAccessor} from '../../hooks';
import {useNavigation} from '@react-navigation/native';
import UserModal from '../../containers/UserModal';

function Home() {
  const dispatch = useDispatch();
  const {getHome} = useAppAccessor();
  const navigation = useNavigation();

  const {vegPizza, nonVegPizza, beverages, todaySpecial, recommended} =
    getHome();

  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    async function callAPI() {
      await dispatch(getVegPizza());
      await dispatch(getNonVegPizza());
      await dispatch(getBeverages());
      await dispatch(getTodaySpecial());
      await dispatch(getRecommended());
    }

    callAPI();
  }, []);

  return (
    <VStack flex={1} bg={colors.white}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          left={<LocationSelector location={defaultLocation} />}
          right={
            <HStack space={4} alignItems={'center'}>
              <Pressable
                onPress={() => navigation.navigate(screens.inside.search)}>
                <CustomIcon
                  name={'SearchIcon'}
                  width={20}
                  height={20}
                  fill={'transparent'}
                  stroke={'#1E5E77'}
                />
              </Pressable>
              <Pressable onPress={() => setShowUserModal(true)}>
                <CustomIcon
                  name={'UserIcon'}
                  width={24}
                  height={24}
                  fill={'transparent'}
                />
              </Pressable>
            </HStack>
          }
          my={2}
        />

        <ScrollView showsVerticalScrollIndicators={false}>
          <ToggleSelector
            data={foodCollectionOptions}
            active={foodCollectionOptions[0]}
            onSelect={() => null}
          />

          <Text mx={4}>
            <Text color={colors.black} fontSize={20} fontWeight={700}>
              Hello there!
            </Text>
            <Text color={colors.black6} fontSize={14} fontWeight={400}>
              {'  '}
              What do you want to eat?
            </Text>
          </Text>

          <PizzaSection
            label={'Veg Pizza'}
            mt={3}
            parentPizzaType={'none'}
            {...{pizza: vegPizza}}
            viewAll
          />
          <PizzaSection
            label={'Non - Veg Pizza'}
            mt={3}
            parentPizzaType={'none'}
            viewAll
            {...{pizza: nonVegPizza}}
          />
          <DrinkSection label={'Drinks'} mt={3} viewAll {...{beverages}} />
          <FullDetailsPizzaSection
            label={'Previously Ordered Items'}
            mt={3}
            verticalItem={false}
            fullDetails={false}
            {...{pizza: todaySpecial}}
          />
          <FullDetailsPizzaSection
            label={"Today's Special"}
            mt={3}
            verticalItem
            fullDetails={false}
            viewAll
            {...{pizza: todaySpecial}}
          />
          <PizzaSection
            label={'Recommended'}
            description={'Amazing pizza’s that you can’t afford to miss'}
            mt={3}
            numColumn={2}
            viewAll
            {...{pizza: recommended}}
          />
        </ScrollView>

        <UserModal
          visible={showUserModal}
          onClose={() => setShowUserModal(false)}
        />
      </SafeAreaView>
    </VStack>
  );
}

export default Home;
