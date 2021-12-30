import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import MapView, {
  PROVIDER_GOOGLE,
  LatLng,
  Marker,
  Polyline,
  Polygon
} from 'react-native-maps';
import styles from './NewActivity.styles';
import Geolocation from '@react-native-community/geolocation';

export default function NewActivity() {
  const [coord, setCoord] = useState();
  const [coords, setCoords] = useState();

  // function Start(){
  //   Geolocation.getCurrentPosition(
  //     (info) => {
  //       console.log(info)
  //       setCoord(info)

  //     },
  //     (error) => console.log(error),
  //     {
  //       enableHighAccuracy: true,
  //     },
  //   );
  // }

  // Geolocation.watchPosition(
  //   position => {
  //     setCoord(position.coords);
  //     setCoords([
  //       ...coords,
  //       [position.coords.latitude, position.coords.longitude],
  //     ]);
  //   },
  //   error => {
  //     console.log(error);
  //   },
  // );

  // console.log(coords);
  // function Finish(){
  //   Geolocation.getCurrentPosition(
  //     (info) => {
  //       const lastLocation={
  //         latitude:info.coords.latitude,
  //         longitude:info.coords.longitude
  //       }
  //       const distance=getDistanceFromLatLonInKm(coord.coords.latitude ,coord.coords.longitude,lastLocation.latitude,lastLocation.longitude)
  //     console.log(distance);
  //     },
  //     (error) => console.log(error),
  //     {
  //       enableHighAccuracy: true,
  //     },
  //   );

  // }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapView}>
        {/* {coord !== undefined && <Marker coordinate={{ latitude : coord.coords.latitude , longitude : coord.coords.longitude }} />} */}
        {/* {coord !== undefined && <Marker coordinate={coord} />} */}
        <Polyline
          coordinates={[
            {latitude: 37.8025259, longitude: -100.4351431},
            {latitude: 60.7896386, longitude: -101.421646},
            {latitude: 59.7665248, longitude: -102.4161628},
            {latitude: 88.7734153, longitude: -1.4577787},
            {latitude: 52.7948605, longitude: -10.4596065},
            {latitude: 2.8025259, longitude: -56.4351431},
          ]}
          strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={3}
        />
      </MapView>

      <View style={styles.buttonContainer}>
        <Button text={'Başlat'} onPress={null} />
        <Button text={'Bitir'} onPress={null} />
      </View>
    </View>
  );
}
