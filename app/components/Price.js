import {HStack, Text} from 'native-base';
import React from 'react';
import CustomIcon from '../theme/icons/icon';
import {colors} from '../constants';

export default ({
  price,
  textProps = {},
  iconProps = {},
  containerProps = {},
}) => {
  return (
    <HStack {...containerProps}>
      <CustomIcon
        name={'RupeeIcon'}
        width={12}
        height={14}
        fill={'transparent'}
        stroke={'black'}
        style={{marginTop: 5}}
        {...iconProps}
      />
      <Text
        fontSize={16}
        color={colors.black}
        fontWeight={'600'}
        ml={1}
        {...textProps}>
        {price}
      </Text>
    </HStack>
  );
};
