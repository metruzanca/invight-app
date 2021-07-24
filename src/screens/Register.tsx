import React from 'react';
import { Text, Button } from 'native-base';
import { AuthScreenProps } from '../routes';

export const Register: React.FC<AuthScreenProps<'Register'>> = ({ navigation }) => (
  <>
    <Text>
      I am Register
    </Text>
    <Button onPress={() => navigation.navigate('Login')}>
      <Text>Go To Login</Text>
    </Button>
  </>
);
