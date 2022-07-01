import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../themes/colors';

const { Screen, Navigator } = createNativeStackNavigator();

//Screens
import { Login } from '../screens/Login';

import { CategoryRegister } from '../screens/CategoryRegister';
import { UserRegisterConfirmation } from '../screens/UserRegisterConfirmation';
import { UserRegister } from '../screens/UserRegister';
import { ProductRegister } from '../screens/ProductRegister';

import { RecoverPassword } from '../screens/RecoverPassword';
import { CreatePassword } from '../screens/CreatePassword';
import { PasswordChangeConfirmation } from '../screens/PasswordChangeConfirmation';

import { PurchaseConfirmation } from '../screens/PurchaseConfirmation';



export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='UserRegister'
        component={UserRegister}
        options={{
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
          headerTintColor: `${colors.secondary}`,
          headerTitleAlign: 'center',
          title: 'Cadastro',
          
        }}
      />
      <Screen
        name='PurchaseConfirmation'
        component={PurchaseConfirmation}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='CreatePassword'
        component={CreatePassword}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='PasswordChangeConfirmation'
        component={PasswordChangeConfirmation}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='UserRegisterConfirmation'
        component={UserRegisterConfirmation}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='CategoryRegister'
        component={CategoryRegister}
        options={{
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
          headerTintColor: `${colors.secondary}`,
          headerTitleAlign: 'center',
          title: 'Cadastro de Categoria',
        }}
      />
      <Screen
        name='ProductRegister'
        component={ProductRegister}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}