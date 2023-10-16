import {Stack, VStack, Image, Text, HStack, Pressable} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {colors} from '../constants';
import Price from '../components/Price';
import PizzaName from '../components/PizzaName';
import {restUrls} from '../config';

export default ({
  name,
  description,
  size,
  price,
  type,
  fullDetails,
  verticalItem,
  imageLocation,
  ...props
}) => {
  const widthFlag = verticalItem && !fullDetails;
  const {width: windowWidth} = useWindowDimensions();

  const PizzaImg = () => {
    let width = verticalItem ? (fullDetails ? 'full' : 330) : 150;
    return (
      <Image
        source={{uri: `${restUrls.baseURL}/api/${imageLocation}`}}
        w={width}
        h={150}
        borderTopRadius={5}
        alt={'pizza-image'}
        m={!verticalItem ? 2 : 0}
      />
    );
  };

  const SizeLbl = () => {
    if (!verticalItem && fullDetails) {
      return (
        <Text fontSize={12} color={colors.black} fontWeight={'600'}>
          {size}
        </Text>
      );
    }

    return null;
  };

  const AddBtn = () => {
    return (
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
          Add
        </Text>
      </Pressable>
    );
  };

  const CustomizeBtn = props => {
    if (!verticalItem || fullDetails) {
      return (
        <Pressable
          borderColor={colors.blue_royal}
          borderWidth={1}
          py={1}
          px={3}
          mt={1}
          mb={2}
          alignItems={'center'}
          ml={1}
          borderRadius={6}
          {...props}>
          <Text color={colors.blue_royal} fontWeight={'600'} fontSize={12}>
            Customise
          </Text>
        </Pressable>
      );
    }

    return null;
  };

  return (
    <Stack
      flex={1}
      w={widthFlag ? 330 : windowWidth - 32}
      bg={'white'}
      shadow={4}
      borderRadius={5}
      flexDirection={verticalItem ? 'column' : 'row'}
      {...props}>
      <PizzaImg />
      <VStack ml={2} mt={1} flex={1} mr={!verticalItem && !fullDetails ? 6 : 0}>
        <PizzaName {...{name, type}} containerProps={{flex: 1}} />

        {description && (
          <Text
            fontSize={12}
            color={colors.black8}
            fontWeight={'400'}
            pr={4}
            pt={verticalItem ? 1 : 0}
            numberOfLines={4}>
            {description}
          </Text>
        )}

        <Stack
          flexDirection={verticalItem ? 'row' : 'column'}
          justifyContent={'space-between'}
          mr={verticalItem ? 3 : 0}
          mb={6}>
          <VStack>
            <Price {...{price}} />
            <SizeLbl />
          </VStack>

          <HStack>
            {fullDetails && <CustomizeBtn mr={2} />}
            <AddBtn />
            {!fullDetails && <CustomizeBtn />}
          </HStack>
        </Stack>
      </VStack>
    </Stack>
  );
};
