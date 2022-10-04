import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteParamTypes} from './RouteParamsType';

export const useNav = () => {
  const navigation = useNavigation<StackNavigationProp<RouteParamTypes>>();

  return navigation;
};

export const useRoutes = () => {
  const navigation = useRoute<RouteProp<RouteParamTypes>>();

  return navigation;
};
