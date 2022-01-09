import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
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
}) {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} provider={PROVIDER_GOOGLE}>
        <Marker coordinate={coord} />
        <Polyline
          coordinates={allData.allCoords}
          strokeColor="#FF0D10" // fallback for when strokeColors is not supported by the map-provider
          strokeWidth={6}
        />
      </MapView>
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
      
      <Button text={'Başlat'} onPress={handleStart} />
      <Modal
        style={styles.modal}
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <View style={styles.modal_container}>
          <View style={styles.inner_container}>
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
          <View style={styles.buttonContainer}>
            <Button text={'Bitir'} onPress={handleFinish} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
