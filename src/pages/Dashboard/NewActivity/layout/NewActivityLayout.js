import React from 'react'
import { View, Text, ActivityIndicator} from 'react-native'
import styles from './NewActivityLayout.styles'
import Button from '../../../../components/Button';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Polygon
} from 'react-native-maps';
import {Timer} from 'react-native-element-timer';
export default function NewActivityLayout({coord,handleStart,handleFinish,timerRef,handleTimer,allData,distance,handleEnd,time}) {
    return (
        <View style={styles.container}>
            <Timer
                    ref={timerRef}
                    style={styles.timer}
                    textStyle={styles.timerText}
                    onTimes={e => {handleTimer(e)}}
                    onPause={e => {}}
                    onEnd={e => {handleEnd(e)}}
                />
         <MapView
                    style={{ flex: 4 }}
                    provider={PROVIDER_GOOGLE}
                >
                <Marker coordinate={coord} />
                    <Polyline
                    coordinates={allData.allCoords}
                    strokeColor="#FF0D10" // fallback for when strokeColors is not supported by the map-provider
                        strokeWidth={6}
                />
            </MapView>
          <Text>Distance:{distance}</Text>
          <Text>Timer:{time}</Text>

        <View style={styles.buttonContainer}>
          <Button text={'Başlat'} onPress={handleStart} />
          <Button text={'Bitir'} onPress={handleFinish}/>
        </View>
      </View>
    )
}
