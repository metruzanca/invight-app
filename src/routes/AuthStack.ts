import { RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"

type AuthParamsList = {
  Login: undefined;
  Register: undefined;
}

export const AuthStack = createStackNavigator<AuthParamsList>()

export type AuthScreenProps<S extends keyof AuthParamsList> = {
  navigation: StackNavigationProp<AuthParamsList, S>
  route: RouteProp<AuthParamsList, S>
}
