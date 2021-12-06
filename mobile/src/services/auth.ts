import { api, TOKEN } from './index';
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

interface AuthProps {
    username: string;
    password: string;
}

export async function login(userInfo: AuthProps) {
    const data = queryString.stringify({ ...userInfo, grant_type: "password" });
    return await api.post('oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            "Content-type": "application/x-www-form-urlencoded"
        }
    });
}

export async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem("@token");
        return token ? true : false;
    } catch (e) {
        console.warn(e);
    }
}

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

export type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export async function isAllowedByRole(routeRoles: Role[]) {
    if (routeRoles.length === 0) {
        return true;
    }
    const { authorities } = await getAccessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}

export async function getAccessTokenDecoded() {
    const token = await AsyncStorage.getItem("@token");
    try {
        if (token) {
            const tokenDecoded = jwtDecode(token);
            return tokenDecoded as AccessToken;
        } else {
            return {} as AccessToken;
        }
    } catch (error) {
        return {} as AccessToken;
    }
}

export async function doLogout() {
    try {
        await AsyncStorage.removeItem("@token");
    } catch (e) {
        console.warn(e);
    }
}