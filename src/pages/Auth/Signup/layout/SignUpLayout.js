import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

export default function SignUpLayout({
  initialFromValues,
  handleFormSubmit,
  handleLogin,
  loading,
}) {
  return (
    <View>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder={'E-posta'}
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder={'Password'}
              isSecure
            />
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder={'Re-Password'}
              isSecure
            />
            <Button text={'Kayıt Ol'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text={'Geri'} loading={loading} onPress={handleLogin} theme='outline' />
    </View>
  );
}
