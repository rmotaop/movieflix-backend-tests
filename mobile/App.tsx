import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;