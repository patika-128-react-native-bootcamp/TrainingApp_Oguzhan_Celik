import React, {useEffect, useState} from 'react';
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
  const [coords, setCoords] = useState([{latitude: 44.8025259, longitude: 36.4351431}]);
  const [status,setStatus]=useState(true);
  const [time,setTime]=useState(false);

  function Start(){
    if(time){
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          setCoords([...coords,{latitude: position.coords.latitude, longitude: position.coords.longitude}]);
  
        },
        (error) => console.log(error),
        {
          enableHighAccuracy: true,
        },

      );
      Start()
      
    }
  }
  


  
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

  //2 konum arasındaki mesafeyi ölçer
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

  // Geolocation.watchPosition(
  //   position => {
  //     setCoords([...coords,{latitude: position.coords.latitude, longitude: position.coords.longitude}]);
  //   },
  //   error => {
  //     console.log(error);
  //   },
  //   {
  //     enableHighAccuracy: true,
  //   },
  // );

  // console.log(coords);
  

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapView}>
        {/* {coord !== undefined && <Marker coordinate={{ latitude : coord.coords.latitude , longitude : coord.coords.longitude }} />} */}
        {/* {coord !== undefined && <Marker coordinate={coord} />} */}
        
        {status && <Polyline
          coordinates={coords}
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
        />}
      </MapView>

      <View style={styles.buttonContainer}>
        <Button text={'Başlat'} onPress={()=>{setTime(true);Start()}} />
        <Button text={'Bitir'} onPress={()=>setTime(false)} />
      </View>
    </View>
  );
}
