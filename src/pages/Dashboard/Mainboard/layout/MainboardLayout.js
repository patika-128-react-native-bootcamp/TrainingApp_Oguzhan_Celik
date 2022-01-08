import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../../../components/Button';
import styles from './MainboardLayout.styles'

export default function MainboardLayout({Logout}) {
    return (
    <View style={styles.container}>
      <Button text={"Signed out"} onPress={Logout} style={styles.button}/>
    </View>
    )
}
