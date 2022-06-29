import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/Login";
import PasswordRecovery from "../Screens/PasswordRecovery";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Recuperar Senha"
        component={PasswordRecovery}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
};

export default Routes;