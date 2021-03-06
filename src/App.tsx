/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, View} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Route} from '.';
import {Home} from './screens/HomeScreen';
import {Details} from './screens/PokemonDetails';
import {PokemonList} from './screens/PokemonList';

const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'rgba(0, 0, 0, 0.87)',
    underlineColor: 'transparent',
    primary: '#1554F6',
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <Route />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
