// App.js - Application entry point
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { PetsProvider } from './src/context/PetsContext';

const App = () => {
  return (
    <PetsProvider>
      <AppNavigator />
    </PetsProvider>
  );
};

export default App;