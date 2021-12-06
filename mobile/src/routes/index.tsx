import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movies, Login, MovieDetails } from '../pages';
import { colors, nav, theme } from '../styles';
import NavBar from '../components/NavBar'
import arrowBack from '../core/assets/arrowBack.png';
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HeaderText: React.FC = () => <Text style={nav.leftText}>DSMovieflix</Text>
const HeaderTextOnBackContainer: React.FC = () => <Text style={nav.leftTextOnBackButton}>DSMovieflix</Text>

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerRight: () => <NavBar />,
            }}>
            <Stack.Screen name="Home" component={Home} options={{
                headerLeft: (props) => (
                    <HeaderText />
                )
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerLeft: (props) => (
                    <View style={theme.backButtonHeaderTextContainer}>
                        <HeaderBackButton {...props}
                            backImage={() => (
                                <Image source={arrowBack} />
                            )}
                        />
                        <HeaderTextOnBackContainer />
                    </View>
                )
            }} />
            <Stack.Screen name="Movies" component={Movies} options={{
                headerLeft: (props) => (
                    <HeaderText />
                )
            }} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
                headerLeft: (props) => (
                    <View style={theme.backButtonHeaderTextContainer}>
                        <HeaderBackButton {...props}
                            backImage={() => (
                                <Image source={arrowBack} />
                            )}
                        />
                        <HeaderTextOnBackContainer />
                    </View>
                )
            }} />
        </Stack.Navigator>
    )

}

export default Routes;