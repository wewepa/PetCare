// AppNavigator.js - Root navigation configuration (Tab + Stack)
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TAB_ICONS = {
  Mascotas: '🐾',
  Registrar: '➕',
  Consejos: '💡',
};

// Stack navigator nested inside the Mascotas tab
const PetsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#F0F4F8' },
      headerTintColor: '#2D3748',
      headerTitleStyle: { fontWeight: '700' },
      headerShadowVisible: false,
    }}
  >
    <Stack.Screen
      name="PetList"
      component={PetListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PetDetail"
      component={PetDetailScreen}
      options={{ title: 'Detalle' }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => (
          <Text style={{ fontSize: 22 }}>{TAB_ICONS[route.name]}</Text>
        ),
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E2E8F0',
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#4299E1',
        tabBarInactiveTintColor: '#A0AEC0',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Mascotas" component={PetsStack} />
      <Tab.Screen name="Registrar" component={RegisterPetScreen} />
      <Tab.Screen name="Consejos" component={TipsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;