import React, { useState, } from 'react'

import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';








function SignUp() {


    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const handleSignup = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registed with: ", user.email);
                navigation.replace("Siginin");
            })
            .catch(error => alert(error.message))
    }


    return (

        <View style={styles.container}>

            <Image style={styles.tinyLogo} source={require('C:\\Users\\Administrator\\Desktop\\test\\my-app\\logo.png')} />
            <Text style={styles.logo}>HeyAPP</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="rpeat password..."
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="user name..."
                    placeholderTextColor="#003f5c"
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}  >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleSignup} >
                <Text style={styles.loginText}  >create</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SignUp


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(49, 47, 47)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    tinyLogo: {
        width: 305,
        height: 260,

    },
});