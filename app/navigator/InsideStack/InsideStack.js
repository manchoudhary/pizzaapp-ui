import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, screens} from '../../constants';
import {Home, MenuList, Cart, Faqs, ProductDetails} from '../../screens';
import HomeTabBar from '../HomeNavigator/HomeTabBar';
import Search from '../../screens/Search';
import MicContainer from '../../containers/MicContainer';
import {useDispatch} from 'react-redux';
import {useAppAccessor} from '../../hooks';
import {toggleMic} from '../../application/application.actions';
import {useNavigation} from '@react-navigation/native';
import CustomIcon from '../../theme/icons/icon';
import {Pressable} from 'native-base';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <HomeTabBar {...props} />}>
      <MainStack.Screen
        name={screens.inside.bottomTabStack.home}
        component={Home}
      />
      <MainStack.Screen
        name={screens.inside.bottomTabStack.menuList}
        component={MenuList}
      />
      <MainStack.Screen
        name={screens.inside.bottomTabStack.cart}
        component={Cart}
      />
    </BottomTab.Navigator>
  );
}

const MainStack = createNativeStackNavigator();

function InsideStack({navigation}) {
  // const navigation = useNavigation();
  const {getApplication} = useAppAccessor();
  const dispatch = useDispatch();

  const [showMic, setShowMic] = useState(false);

  return (
    <>
      <MicContainer
        visible={showMic}
        onClose={() => setShowMic(false)}
        navigation={navigation}
      />
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName={screens.inside.productDetails}
      >
        <MainStack.Screen
          name={screens.inside.bottomTab}
          component={BottomTabNavigator}
        />
        <MainStack.Screen name={screens.inside.search} component={Search} />
        <MainStack.Screen
          name={screens.inside.productDetails}
          component={ProductDetails}
        />
        <MainStack.Screen name={screens.inside.faqs} component={Faqs} />
      </MainStack.Navigator>

      <Pressable
        bg={colors.blue_royal}
        position={'absolute'}
        right={0}
        bottom={0}
        p={4}
        mr={4}
        mb={16}
        borderRadius={'full'}
        onPress={() => {
          setShowMic(true);
        }}>
        <CustomIcon
          name={'MicIcon'}
          width={30}
          height={30}
          fill={colors.blue_royal}
          stroke={colors.white}
        />
      </Pressable>
    </>
  );
}

export default InsideStack;
