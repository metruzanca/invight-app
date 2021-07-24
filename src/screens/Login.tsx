import React from 'react';
import { Button, Text } from 'native-base';
import { AuthScreenProps } from '../routes/AuthStack';

export const Login: React.FC<AuthScreenProps<'Login'>> = ({
  navigation,
}) => (
  <>
    <Text>
      I am Login
    </Text>
    <Button onPress={() => navigation.navigate('Register')}>
      <Text>Go To Register</Text>
    </Button>
  </>
);
