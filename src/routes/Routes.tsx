import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import AppConfig from '../constants/config';
import { MenuStack } from './MenuStack';
import { Menu, Venue } from '@screens/index';

export const Routes:React.FC = () => (
  <NavigationContainer>
    <MenuStack.Navigator
      initialRouteName="Menu"
    >
      <MenuStack.Screen
        name="Venue"
        component={Venue}
      />
      <MenuStack.Screen
        name="Menu"
        component={Menu}
      />
    </MenuStack.Navigator>
  </NavigationContainer>
);
