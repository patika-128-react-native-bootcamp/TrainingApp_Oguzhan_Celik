import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import MainboardLayout from './layout/MainboardLayout';

import database from '@react-native-firebase/database';


export default function Mainboard({navigation}) {
  const [userid, setUserid] = useState(auth().currentUser.uid);
  const [activityList, setActivityList] = useState([]);
e
  useEffect(() => {
    const reference = database().ref(`/Leaderboard/${userid}`);
    reference.on('value', snapshot => {
      const response = snapshot.val();
      setActivityList(response);
    });
  }, []);

  console.log(activityList.username)

  function Logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return <MainboardLayout Logout={Logout} username={activityList.username} distance={activityList.distance}/>;
}
