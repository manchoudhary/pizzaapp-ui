import React from 'react';
import {HStack} from 'native-base';

export default ({left, right, ...props}) => {
  return (
    <HStack w={'full'} justifyContent={'space-between'} px={4} {...props}>
      <>{left}</>
      <>{right}</>
    </HStack>
  );
};
