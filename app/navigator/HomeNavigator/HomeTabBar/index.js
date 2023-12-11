import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import CustomIcon from '../../../theme/icons/icon';
import {colors, screens} from '../../../constants';
import MenuListFilterModal from '../../../containers/MenuListFilterModal';
import {HStack, VStack} from 'native-base';
import MicContainer from '../../../containers/MicContainer';
import {useAppAccessor} from '../../../hooks';
import {useDispatch} from 'react-redux';
import {toggleMic} from '../../../application/application.actions';

const HomeTabBar = ({state, descriptors, navigation}) => {
  const [showMenuListModal, setShowMenuListModal] = useState(false);

  const {getApplication} = useAppAccessor();
  const dispatch = useDispatch();

  const {showMic} = getApplication();

  return (
    <VStack bg={showMenuListModal ? 'white' : 'transparent'}>
      <MenuListFilterModal
        visible={showMenuListModal}
        onClose={() => setShowMenuListModal(false)}
      />

      <HStack shadow={8} mt={showMenuListModal ? 2 : 0}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (route.name === screens.inside.bottomTabStack.menuList) {
              setShowMenuListModal(true);
              return;
            }

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const icon =
            label === 'home'
              ? 'HomeIcon'
              : label === 'menuList'
              ? 'MenuIcon'
              : 'CartIcon';

          return (
            <TouchableOpacity
              key={label}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
              }}>
              <CustomIcon
                name={icon}
                width={20}
                height={20}
                fill={'transparent'}
                stroke={isFocused ? colors.blue_royal : '#858585'}
              />
            </TouchableOpacity>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default HomeTabBar;
