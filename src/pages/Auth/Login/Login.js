import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import LoginLayout from './layout/LoginLayout';
import {showMessage} from 'react-native-flash-message';
import parseAuthErrorMessage from '../../../utils/parseAuthErrorMessage';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const initialFromValues = {
    usermail: '',
    password: '',
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      console.log('başarılı');
    } catch (error) {
      showMessage({
        message: parseAuthErrorMessage(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  function goToSignupPage() {
    navigation.navigate('SignupPage');
  }

  return (
    <LoginLayout
      initialFromValues={initialFromValues}
      handleFormSubmit={handleFormSubmit}
      goToSignupPage={goToSignupPage}
    />
  );
}
