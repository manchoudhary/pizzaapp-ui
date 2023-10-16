import {Text, VStack, Pressable, HStack, Divider} from 'native-base';
import React from 'react';
import {Modal} from 'react-native';
import CustomIcon from '../theme/icons/icon';
import {colors, screens} from '../constants';
import {useNavigation} from '@react-navigation/native';

export default function UserModal({visible, onClose}) {
  const navigation = useNavigation();
  const Section = ({iconName, label, onPress}) => {
    return (
      <Pressable
        onPress={() => {
          if (onPress) {
            onPress();
            onClose();
          }
        }}>
        <Divider bg={'#858585'} thickness={0.5} />

        <HStack px={7} py={4} alignItems={'center'}>
          <CustomIcon
            name={iconName}
            width={36}
            height={36}
            fill={'transparent'}
            stroke={'black'}
          />
          <Text ml={4}>{label}</Text>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <VStack flex={1} bg={'rgba(0,0,0,0.5)'} justifyContent={'flex-end'}>
        <VStack bg={'white'} h={'90%'} w={'80%'} borderTopRightRadius={10}>
          <Pressable alignSelf={'flex-end'} p={4} onPress={() => onClose()}>
            <CustomIcon
              name={'CloseCircle'}
              width={24}
              height={24}
              fill={'transparent'}
              stroke={'black'}
            />
          </Pressable>

          <HStack ml={6} mr={10} mb={4} alignItems={'center'}>
            <CustomIcon
              name={'UserIconCircle'}
              width={45}
              height={45}
              fill={'transparent'}
              stroke={'black'}
            />
            <VStack flex={1} ml={4}>
              <Text color={'#1E5E77'} fontWeight={'bold'}>
                Hi! Guest!
              </Text>
              <Text color={'#858585'} fontSize={10}>
                Login for exclusive deals and many more
              </Text>
            </VStack>

            <Pressable
              bg={colors.blue_royal}
              py={1}
              px={3}
              mt={1}
              mb={2}
              alignItems={'center'}
              mr={1}
              borderRadius={6}>
              <Text color={colors.white} fontWeight={'600'} fontSize={12}>
                Login
              </Text>
            </Pressable>
          </HStack>

          <Section iconName={'OrderHistoryIcon'} label={'Order History'} />
          <Section iconName={'TrackOrderIcon'} label={'Track Order'} />
          <Section
            iconName={'FaqIcon'}
            label={'FAQs'}
            onPress={() => navigation.navigate(screens.inside.faqs)}
          />
          <Section
            iconName={'TermsAndConditionsIcon'}
            label={'Terms & Conditions'}
          />
          <Section iconName={'LogoutIcon'} label={'Logout'} />
        </VStack>
      </VStack>
    </Modal>
  );
}
