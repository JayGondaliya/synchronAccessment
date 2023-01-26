import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';

const SplashContainer = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 2000);
  }, [navigation]);
  return <View />;
};

export default SplashContainer;
