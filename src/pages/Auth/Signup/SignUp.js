import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import SignUpLayout from './layout/SignUpLayout';
import {showMessage} from 'react-native-flash-message';
import parseAuthErrorMessage from '../../../utils/parseAuthErrorMessage';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    navigation.goBack();
  }

  const initialFromValues = {
    usermail: '',
    password: '',
    repassword: '',
  };

  function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      console.log('hata');
      return;
    }
    try {
      auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: parseAuthErrorMessage(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <SignUpLayout
      initialFromValues={initialFromValues}
      handleFormSubmit={handleFormSubmit}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
}
