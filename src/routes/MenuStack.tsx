import { RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"

type MenuParamsList = {
  Venue: undefined;
  Menu: undefined;
}

export const MenuStack = createStackNavigator<MenuParamsList>()

export type MenuScreenProps<S extends keyof MenuParamsList> = {
  navigation: StackNavigationProp<MenuParamsList, S>
  route: RouteProp<MenuParamsList, S>
}
