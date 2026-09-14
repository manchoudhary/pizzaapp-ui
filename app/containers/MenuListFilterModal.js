import {HStack, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {Modal} from 'react-native';
import CustomIcon from '../theme/icons/icon';
import {colors, menuTypes, screens} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {CHANGE_MENU_TYPE} from '../screens/Home/home.actionTypes';
import {useAppAccessor} from '../hooks';

export default function MenuListFilterModal({visible, onClose}) {
  const navigation = useNavigation();
  const {getHome} = useAppAccessor();

  const {currentMenu, ...restHomeReducerData} = getHome();

  const dispatch = useDispatch();

  const Section = ({menuType, label, total}) => {
    return (
      <Pressable
        onPress={() => {
          dispatch({type: CHANGE_MENU_TYPE, payload: menuType});
          navigation.navigate(screens.inside.bottomTabStack.menuList);
          onClose();
        }}>
        <HStack py={4}>
          <Text
            flex={1}
            color={
              currentMenu.value === menuType.value
                ? colors.blue_royal
                : colors.black
            }>
            {label}{' '}
          </Text>
          <Text
            color={
              currentMenu.value === menuType.value
                ? colors.blue_royal
                : colors.black
            }>
            {total}{' '}
          </Text>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <VStack
        flex={1}
        bg={'rgba(0,0,0,0.5)'}
        justifyContent={'flex-end'}
        style={{marginBottom: 55}}>
        <VStack bg={'white'} w={'100%'} px={6} borderTopRadius={10}>
          <HStack
            py={4}
            borderTopRadius={10}
            borderBottomColor={'#d9d9d9'}
            borderBottomWidth={1}>
            <Text flex={1} fontWeight={'bold'}>
              Full Menu{' '}
            </Text>
            <Pressable alignSelf={'flex-end'} onPress={() => onClose()}>
              <CustomIcon
                name={'CloseCircle'}
                width={24}
                height={24}
                fill={'transparent'}
                stroke={'black'}
                strokeWidth={2}
              />
            </Pressable>
          </HStack>
          {menuTypes.map(menuType => {
            return (
              <Section
                label={menuType.label}
                total={(restHomeReducerData[menuType.name]?.items ?? 0).length}
                {...{menuType}}
              />
            );
          })}
        </VStack>
      </VStack>
    </Modal>
  );
}
