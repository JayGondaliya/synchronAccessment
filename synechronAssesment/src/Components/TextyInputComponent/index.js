import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {style} from './styles';

const TextInputComponent = ({setText, value, title, isSecurField}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={style.container}>
      <Text style={style.txtStyle}>{title}</Text>
      <TextInput
        style={style.textInput}
        value={value}
        onChangeText={setText}
        secureTextEntry={!show}
      />
      <Pressable onPress={() => setShow(oldValue => !oldValue)}>
        {isSecurField ? (
          <Text style={style.btnstyle}>{show ? 'hide' : 'show'}</Text>
        ) : null}
      </Pressable>
    </View>
  );
};

export default TextInputComponent;
