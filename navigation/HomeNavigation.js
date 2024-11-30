import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FileUploadScreen from '../screens/FileUploadScreen';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Hide header in bottom tab navigation
        tabBarStyle: {
          backgroundColor: '#D9D9D9', // Gray background color
        },
        tabBarActiveTintColor: '#47C2C4', // Green color for active tab
        tabBarInactiveTintColor: '#3B3B3B', // Black color for inactive tab
        tabBarLabelStyle: {
          fontSize: 14, // Customize the label font size if needed
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Screen" component={ScreenOne} />
      <Tab.Screen name="Screen2" component={ScreenTwo} />
      <Tab.Screen name="File" component={FileUploadScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
