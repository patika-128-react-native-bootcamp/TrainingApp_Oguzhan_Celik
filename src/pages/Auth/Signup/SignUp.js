import React,{useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

export default function Login({navigation}) {

    const [loading,setLoading]=useState(false);
  function handleLogin() {
    navigation.goBack();
  }

  const initialFromValues={
    usermail:'',
    password:'',
    repassword:'',
}

function handleFormSubmit(formValues){
    if(formValues.password !== formValues.repassword){
        console.log('hata');
        return;
    }
    try {
        auth()
      .createUserWithEmailAndPassword(formValues.usermail,formValues.password
      )
      setLoading(false);
        navigation.navigate("LoginPage")
    } catch (error) {
        
        setLoading(false);
    }
}

  
  return (
    <View>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit})=>(
                     <>
                        <Input onChangeText={handleChange('usermail')} value={values.usermail} placeholder={"E-posta"}/>
                        <Input onChangeText={handleChange('password')} value={values.password} placeholder={"Password"} isSecure/>
                        <Input onChangeText={handleChange('repassword')} value={values.repassword} placeholder={"Re-Password"} isSecure/>
                        <Button text={"Kayıt Ol"} onPress={handleSubmit}/>
                    </>
                )}
      </Formik>
      <Button text={'Geri'} loading={loading} onPress={handleLogin} />
    </View>
  );
}
