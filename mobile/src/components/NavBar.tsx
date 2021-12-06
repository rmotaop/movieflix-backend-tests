import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { nav, text } from '../styles';
import { useNavigation } from '@react-navigation/core';
import { doLogout, isAuthenticated } from '../services/auth';


const NavBar: React.FC = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Login");
    }

    useEffect(() => {
        logged();
    }, []);

    return (
        <>
            {
                authenticated ? (
                    <TouchableOpacity style={nav.logoutBtn} onPress={() => logout()}>
                        <Text style={text.logoutText}>Sair</Text>
                    </TouchableOpacity>
                ) : null
            }
        </>
    )

}

export default NavBar;