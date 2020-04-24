/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Start from './components/Page/StartPage/start';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryTab from './components/Page/CategoryPage/category-tab';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Start"
            component={Start}
          />
          <Stack.Screen
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#F6F5F5',
                shadowRadius: 0,
                shadowOffset: {
                  height: 0,
                },
              },
            }}
            name="Category"
            component={CategoryTab}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
