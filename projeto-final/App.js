import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes.js';
import 'react-native-gesture-handler';
import { IdProvider } from './src/context/index.js';

export default function App() {
  return (
    <IdProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </IdProvider>
  );
}