import React ,{useState}from 'react'
import { View, Text } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';


export default function Login({navigation}) {
    const[loading,setLoading]=useState(false);

    const initialFromValues={
        usermail:'',
        password:''
    }

    async function handleFormSubmit(formValues){
        try {
            setLoading(true);
           await auth().signInWithEmailAndPassword(formValues.usermail,formValues.password);
           setLoading(false);
            console.log('başarılı')
        }
        catch (error) {
            //Alert Ekleyebilirsin.
            setLoading(false);
        }
    }

    function goToSignupPage(){
        navigation.navigate('SignupPage');
    }

    

   


    return (
        <View>
            <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
                {({values,handleChange,handleSubmit})=>(
                     <>
                        <Input onChangeText={handleChange('usermail')} value={values.usermail} placeholder={"E-posta"}/>
                        <Input onChangeText={handleChange('password')} value={values.password} placeholder={"Password"} isSecure/>
                        <Button text={"Giriş Yap"} onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
            <Button text={"Kayıt ol"} onPress={goToSignupPage}/>
            
        </View>
    )
}
