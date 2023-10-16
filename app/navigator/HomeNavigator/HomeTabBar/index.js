import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import CustomIcon from '../../../theme/icons/icon';
import {colors, screens} from '../../../constants';

const HomeTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
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
    </View>
  );
};

export default HomeTabBar;
