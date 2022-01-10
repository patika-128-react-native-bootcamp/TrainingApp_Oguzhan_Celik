import React from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import styles from './NewActivityLayout.styles';
import Button from '../../../../components/Button';
import Modal from 'react-native-modal';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Polygon,
} from 'react-native-maps';
import {Timer} from 'react-native-element-timer';
export default function NewActivityLayout({
  coord,
  handleStart,
  handleFinish,
  timerRef,
  handleTimer,
  allData,
  distance,
  handleEnd,
  time,
  visible,
  onClose,
  weatherData,
}) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: coord.latitude,
          longitude: coord.longitude,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}>
        <Marker coordinate={coord} />
        <Polyline
          coordinates={allData.allCoords}
          strokeColor="#FF0D10" // fallback for when strokeColors is not supported by the map-provider
          strokeWidth={6}
        />
      </MapView>
      
        <View style={styles.inner_container}>
         <View style={styles.time_distance_container}>

          <Text style={styles.distance}>Distance:{distance}</Text>
          <View style={styles.timer_container}>
            
            <Text style={styles.timer}>Time:</Text>
            <Timer
              ref={timerRef}
              style={styles.timer}
              textStyle={styles.timer}
              onTimes={e => {
                handleTimer(e);
              }}
              onPause={e => {}}
              onEnd={e => {
                handleEnd(e);
              }}
            />
          </View>
         </View>
          <View>

          <Text style={styles.temp}>Temp:{weatherData.main.temp}°C</Text>
          <View style={styles.image_container}>
          <Text style={styles.main}>{weatherData.weather[0].main}</Text>
          <Image
            style={styles.weather_image}
            source={{
              uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
            }}
          />
          
          </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Başlat'} onPress={handleStart} />
          <Button text={'Bitir'} onPress={handleFinish} />
        </View>
      </View>

  );
}
