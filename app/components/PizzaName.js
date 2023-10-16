import {HStack, Text} from 'native-base';
import React from 'react';
import CustomIcon from '../theme/icons/icon';
import {colors} from '../constants';

export default ({
  type = true,
  name,
  containerProps = {},
  iconProps = {},
  textProps = {},
}) => {
  return (
    <HStack alignItems={'center'} {...containerProps}>
      {type !== 'none' && (
        <CustomIcon
          name={type ? 'VegIcon' : 'NonVegIcon'}
          width={12}
          height={14}
          fill={'transparent'}
          style={{marginTop: 5, marginRight: 8}}
          {...iconProps}
        />
      )}
      <Text
        fontSize={12}
        color={colors.black}
        fontWeight={'600'}
        mt={0.5}
        numberOfLines={1}
        {...textProps}>
        {name}
      </Text>
    </HStack>
  );
};
