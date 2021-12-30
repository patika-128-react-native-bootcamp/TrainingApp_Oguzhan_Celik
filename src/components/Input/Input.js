import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.styles';

const Input = ({onChangeText, label, placeholder, keyboardType,value,isSecure}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text>{label}</Text>
        <TextInput
          style={styles.comment_input}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
};

export default Input;
