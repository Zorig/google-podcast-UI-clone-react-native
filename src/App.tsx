import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import Navigator from 'navigators';

function App() {
  const scheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigator />
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}

export default App;
