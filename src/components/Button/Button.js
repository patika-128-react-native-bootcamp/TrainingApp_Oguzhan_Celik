import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

export default function Button({
  text,
  onPress,
  theme = 'default',
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles[theme].Button}
        onPress={onPress}
        {...otherProps}>
        <Text style={styles[theme].text} onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
