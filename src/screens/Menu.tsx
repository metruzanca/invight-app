import React from 'react';
import { Text } from 'native-base';
import { useConstructor } from '@hooks/useConstructor';
import { useSelector, useDispatch } from '@store/index';

export const Menu: React.FC = () => {
  useConstructor(() => {
    const dispatch = useDispatch()
    dispatch.menu.loadQR({ id: 'someId'})
  })
  
  const state = useSelector(state => state.menu)

  return (
    <Text>
      I am Menu
    </Text>
  );
}
