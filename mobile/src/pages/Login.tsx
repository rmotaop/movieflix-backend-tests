import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { theme, text } from '../styles';
import eyesOpened from '../core/assets/eyes-opened.png';
import eyesClosed from '../core/assets/eyes-closed.png';
import arrow from '../core/assets/Seta.png';
import { login, setAsyncKeys } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [userFetchData, setUserFetchData] = useState({});

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });

    async function handleLogin() {
        const toast = Toast.showLoading("Logando...");
        await login(userInfo)
            .then(result => {
                const { access_token } = result.data;
                setAsyncKeys("@token", access_token);
                setUserFetchData(result);
                setUserInfo({
                    username: "",
                    password: "",
                });
                Toast.hide(toast);
                navigation.navigate("Movies");
            }).catch(err => {
                Toast.hide(toast);
                Toast.show("Login inválido. Tente novamente: " + err);
            });
    }

    return (
        <View style={theme.container}>
            <Text style={text.loginTitle}>
                Login
                </Text>
            <View style={theme.form}>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={theme.textInput}
                    value={userInfo.username}
                    onChangeText={(e) => {
                        const newUserInfo = { ...userInfo };
                        newUserInfo.username = e;
                        setUserInfo(newUserInfo);
                    }}
                />
                <View style={theme.passwordContainer}>
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        keyboardType={"default"}
                        style={theme.textInput}
                        value={userInfo.password}
                        secureTextEntry={hidePassword}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.password = e;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <TouchableOpacity
                        style={theme.toggle}
                        onPress={() => setHidePassword(!hidePassword)}>
                        <Image
                            style={theme.eyes}
                            source={hidePassword ? eyesOpened : eyesClosed} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={theme.primaryButton}
                activeOpacity={0.8}
                onPress={() => handleLogin()}>
                <View style={theme.buttonTextContainer}>
                    <Text style={text.primaryText}>Fazer login</Text>
                </View>
                <View style={theme.arrowContainer}>
                    <Image source={arrow} />
                </View>

            </TouchableOpacity>
        </View>
    )

}

export default Login;