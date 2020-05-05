import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/dist/FontAwesome'

import HomePage from './src/pages/HomePage';
import InboxPage from './src/pages/InboxPage';
import AccountPage from './src/pages/AccountPage';

function Home() {
  return (
    <HomePage />
  );
}

function Inbox() {
  return (
    <InboxPage />
  );
}

function Account() {
  return (
    <AccountPage />
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color})=>(<Icon name='home' size={25} color={color} />)}} />
          <Tab.Screen name='Inbox' component={Inbox} options={{tabBarIcon: ({color})=>(<Icon name='inbox' size={25} color={color} />)}} />
          <Tab.Screen name='Account' component={Account} options={{tabBarIcon: ({color})=>(<Icon name='user' size={25} color={color} />)}} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
