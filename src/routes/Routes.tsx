import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import AppConfig from '../constants/config';
import { AuthStack } from './AuthStack';
import { Login, Register } from '@screens/index';

export const Routes:React.FC = () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  </NavigationContainer>
);
