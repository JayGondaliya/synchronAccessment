import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SplashContainer from '../SplashContainer';
import Dashboard from '../Dashboard';
import {useSelector} from 'react-redux';

const BASE_STACK = createNativeStackNavigator();
// const MAIN_DRAWER = createDrawerNavigator();
const MAIN_STACK = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MAIN_STACK.Navigator
      initialRouteName="dashboard"
      screenOptions={{headerShown: false}}>
      <MAIN_STACK.Screen name="dashboard" component={Dashboard} />
    </MAIN_STACK.Navigator>
  );
};

export const RootNavigator = () => {
  const userDetail = useSelector(state => state);

  return (
    <NavigationContainer>
      <BASE_STACK.Navigator
        initialRouteName={userDetail?.userOperation?.isLogin ? 'main' : 'login'}
        screenOptions={{
          headerShown: false,
        }}>
        <BASE_STACK.Screen name="splash" component={SplashContainer} />
        <BASE_STACK.Screen name="login" component={Login} />
        <BASE_STACK.Screen name="main" component={MainStackNavigator} />
      </BASE_STACK.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
