import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import styles from './Button.styles';


export default function Button({text,onPress}) {
    return (
        <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.text} onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
    )
}
