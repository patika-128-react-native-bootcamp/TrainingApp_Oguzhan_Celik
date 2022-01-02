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
export default function NewActivityLayout({coord,handleStart,handleFinish,loading,timerRef,handleTimer}) {
    return (
        <View style={styles.container}>
            <Timer
                    ref={timerRef}
                    style={styles.timer}
                    textStyle={styles.timerText}
                    onTimes={e => {handleTimer(e)}}
                    onPause={e => {}}
                    onEnd={e => {}}
                />
        {loading ? <MapView provider={PROVIDER_GOOGLE} style={styles.mapView} initialRegion={{
            latitude:coord[0].latitude,
            longitude:coord[0].longitude,
            latitudeDelta:0.1,
            longitudeDelta:0.2
        }}>
            {coord !== undefined && <Marker coordinate={coord[0]} />}
          {/* {coord !== undefined && <Marker coordinate={coord[0]} />} */}
        </MapView>: <ActivityIndicator/>}
  
        <View style={styles.buttonContainer}>
          <Button text={'Başlat'} onPress={handleStart} />
          <Button text={'Bitir'} onPress={handleFinish}/>
        </View>
      </View>
    )
}
