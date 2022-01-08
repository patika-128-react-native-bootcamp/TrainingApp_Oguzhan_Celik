import React from 'react'
import { View,Image } from 'react-native'
import {Formik} from 'formik';
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import styles from './LoginLayout.styles'

export default function LoginLayout({initialFromValues,handleFormSubmit,goToSignupPage}) {
    return (
        <View>
            <Image source={require('../../../../assets/logo2.png')} style={styles.image} />
            <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
                {({values,handleChange,handleSubmit})=>(
                     <>
                        <Input onChangeText={handleChange('usermail')} value={values.usermail} placeholder={"E-posta"}/>
                        <Input onChangeText={handleChange('password')} value={values.password} placeholder={"Password"} isSecure/>
                        <Button text={"Giriş Yap"} onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
            <Button text={"Kayıt ol"} onPress={goToSignupPage} theme='outline'/>
        </View>
    )
}
