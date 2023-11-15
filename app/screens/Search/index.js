import {
  HStack,
  Input,
  Text,
  VStack,
  Pressable,
  Divider,
  Spinner,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomIcon from '../../theme/icons/icon';
import {useAppAccessor} from '../../hooks';
import {FullDetailsPizzaSection} from '../../containers';
import {colors} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchSearchItems} from './search.actions';
import {ActivityIndicator} from 'react-native';

const suggestions = ['Margherita', 'Chicken Pizza', 'Drinks'];

export default function Search() {
  const {getSearch} = useAppAccessor();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {loading, items} = getSearch();

  const [searchText, setSearchText] = useState();
  const [searchedQuery, setSearchedQuery] = useState();

  useEffect(() => {
    dispatch({type: 'CLEAR_SEARCH'});
  }, []);

  const SearchSuggestionContainer = () => {
    return (
      <VStack mx={4} mt={3}>
        <Text>{'Popular Searches '}</Text>
        {suggestions.map((suggestion, index) => {
          return (
            <>
              <Pressable
                flexDirection={'row'}
                my={3}
                alignItems={'center'}
                onPress={() => setSearchText(suggestion)}>
                <CustomIcon
                  name={'SearchIcon'}
                  width={16}
                  height={16}
                  fill={'transparent'}
                  stroke={'#d6d6d6'}
                />
                <Text ml={3} color={'#858585'}>
                  {suggestion}
                </Text>
              </Pressable>
              {index !== suggestions.length - 1 && (
                <Divider bg={'#858585'} thickness={0.5} />
              )}
            </>
          );
        })}
      </VStack>
    );
  };

  return (
    <VStack flex={1} bg={'white'}>
      <SafeAreaView style={{flex: 1}}>
        <HStack px={4} my={2} alignItems={'center'}>
          <Pressable onPress={() => navigation.goBack()}>
            <CustomIcon name={'BackIcon'} width={14} height={14} />
          </Pressable>
          <HStack
            flex={1}
            borderWidth={1}
            borderColor={'black'}
            borderRadius={4}
            ml={4}>
            <Input
              flex={1}
              variant={'unstyled'}
              value={searchText}
              placeholder={"Search your favorite pizza's "}
              onChangeText={text => setSearchText(text)}
            />
            <Pressable
              px={2}
              alignItems={'center'}
              justifyContent={'center'}
              borderLeftColor={'#858585'}
              borderLeftWidth={1}
              my={1}
              onPress={() => {
                setSearchedQuery(searchText);
                dispatch(fetchSearchItems(searchText));
              }}>
              <CustomIcon
                name={'SearchIcon'}
                width={16}
                height={16}
                fill={'transparent'}
                stroke={'#1E5E77'}
              />
            </Pressable>
          </HStack>
        </HStack>

        {!loading && (items ?? []).length === 0 && (
          <SearchSuggestionContainer />
        )}

        {!loading && (items ?? []).length > 0 && (
          <Text ml={4} color={colors.text6}>
            {`${(items ?? []).length} Search result for ${searchedQuery}`}{' '}
          </Text>
        )}

        {loading && (
          <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
            <ActivityIndicator />
          </VStack>
        )}

        {!loading && (items ?? []).length > 0 && (
          <FullDetailsPizzaSection
            mt={3}
            verticalItem
            fullDetails
            viewAll={false}
            {...{pizza: {loading, items}, searchText}}
          />
        )}
      </SafeAreaView>
    </VStack>
  );
}
