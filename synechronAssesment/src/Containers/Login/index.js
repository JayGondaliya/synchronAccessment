import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TextInputComponent from '../../Components/TextyInputComponent';
import {saveUserLoginInRedux} from '../../redux/Actions/User';
import {style} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validateLoginData = () => {
    const regularExpression =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})/;
    const email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regularExpression.test(password) && email_regx.test(email)) {
      return true;
    }
    return false;
  };

  const navigateToDashbhoard = () => {
    dispatch(saveUserLoginInRedux(true));
    navigation.navigate('main');
  };

  return (
    <View style={style.container}>
      <TextInputComponent title={'E-mail'} value={email} setText={setEmail} />
      <TextInputComponent
        title={'Password'}
        value={password}
        setText={setPassword}
        isSecurField
      />

      <Pressable
        style={[
          style.onPressStyle,
          {backgroundColor: validateLoginData() ? 'green' : 'lightgreen'},
        ]}
        onPress={navigateToDashbhoard}>
        <Text>{'Submit'}</Text>
      </Pressable>
    </View>
  );
};

export default Login;
