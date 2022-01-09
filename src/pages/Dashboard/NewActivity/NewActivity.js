import React, {useEffect, useState, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import NewActivityLayout from './layout/NewActivityLayout';
import {ActivityIndicator} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import useFetch from '../../../hooks/useFetch';

export default function NewActivity() {
  const [coord, setCoord] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [status, setStatus] = useState(false);
  const [allData, setAllData] = useState({
    allCoords: [],
    distance: 0,
    time: 0,
    speed: 0,
    date: new Date().toISOString(),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(auth().currentUser);
  const [loading, setLoading] = useState(true);
  const URL = 'https://api.openweathermap.org/data/2.5/weather?';
  const key = '80352062ad57d8bedbdc1b3bb2706d58';
  const timerRef = useRef(null);

  const getPosition = t => {
    Geolocation.getCurrentPosition(
      c => {
        setCoord({
          latitude: c.coords.latitude,
          longitude: c.coords.longitude,
          time: t,
        });
      },
      error => console.log(error),
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: true,
      },
    );
  };

  const handleTimer = t => {
    if (t % 3 == 0) {
      getPosition(t);
    }
  };

  const handleEnd = t => {
    setAllData({...allData, time: t});
    const reference = database().ref(`/Users/${user.uid}`);
    reference.push(allData);
  };

  const {
    loading: weatherLoading,
    data: weatherData,
    error,
  } = useFetch(
    `${URL}lat=${coord.latitude}&lon=${coord.longitude}&appid=${key}&units=metric`,
  );

  useEffect(() => {
    Geolocation.getCurrentPosition(
      c => {
        setAllData({
          allCoords: [
            {
              latitude: c.coords.latitude,
              longitude: c.coords.longitude,
            },
          ],
          distance: 0,
          time: 0,
          speed: 0,
          date: new Date().toISOString(),
        });
        setCoord({
          latitude: c.coords.latitude,
          longitude: c.coords.longitude,
        });
        setLoading(false);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
      },
    );
    const reference = database().ref(`/Users/${user.uid}`);
    reference.on('value', snapshot => {
      const response = snapshot.val();
    });
  }, []);

  useEffect(() => {
    const length = allData.allCoords.length - 1;
    if (
      coord.longitude != 0 &&
      coord.longitude != allData.allCoords[length].longitude
    ) {
      setAllData({
        allCoords: [...allData.allCoords, coord],
        distance:
          allData.distance +
          getDistanceFromLatLonInKm(
            allData.allCoords[length].latitude,
            allData.allCoords[length].longitude,
            coord.latitude,
            coord.longitude,
          ),
        time: coord.time,
        date: new Date().toISOString(),
      });
    }
  }, [coord]);

  if (loading || weatherLoading) {
    return <ActivityIndicator />;
  }

  function handleStart() {
    if (!status) {
      timerRef.current.start();
      setModalVisible(true);
      setStatus(true);
    }
  }

  function leaderboard() {
    try {
      database()
        .ref(`/Leaderboard`)
        .child(auth().currentUser.uid)
        .set({
          distance: database.ServerValue.increment(allData.distance),
          username: auth().currentUser.email.split('@').shift(),
          number: database.ServerValue.increment(1),
          time:database.ServerValue.increment(allData.time)
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handleFinish() {
    setModalVisible(false);
    timerRef.current.stop();

    leaderboard();
  }
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

  return (
    <NewActivityLayout
      handleEnd={handleEnd}
      time={allData.time}
      distance={allData.distance}
      coord={coord}
      handleStart={handleStart}
      handleFinish={handleFinish}
      loading={loading}
      timerRef={timerRef}
      handleTimer={handleTimer}
      allData={allData}
      visible={modalVisible}
      onClose={handleFinish}
      weatherData={weatherData}
    />
  );
}
