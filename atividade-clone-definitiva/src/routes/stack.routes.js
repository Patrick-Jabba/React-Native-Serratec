import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../themes/colors';

const { Screen, Navigator } = createNativeStackNavigator();

//Screens
import { Login } from '../screens/Login';

import { UserRegister } from '../screens/UserRegister';
import { UserRegisterConfirmation } from '../screens/UserRegisterConfirmation';

import { Marketplace } from '../screens/Marketplace';
import { Favorite } from '../screens/Favorite';

import { Products } from '../screens/Products';
import { ProductRegister } from '../screens/ProductRegister';
import { ProductAlteration } from '../screens/ProductAlteration';
import { PurchaseConfirmation } from '../screens/PurchaseConfirmation';

import { CategoryRegister } from '../screens/CategoryRegister';
import { CategoryAlteration } from '../screens/CategoryAlteration';

import { RecoverPassword } from '../screens/RecoverPassword';
import { CreatePassword } from '../screens/CreatePassword';
import { PasswordChangeConfirmation } from '../screens/PasswordChangeConfirmation';

import { Shopping } from '../screens/Shopping';

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Login'
        component={Login}
      />
      <Screen
        name='Marketplace'
        component={Marketplace}
        options={{
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
          headerTintColor: `${colors.secondary}`,
          headerTitleAlign: 'center',
          title: 'Marketplace',
        }}
      />
      <Screen
        name='UserRegister'
        component={UserRegister}
      />
      <Screen
        name='UserRegisterConfirmation'
        component={UserRegisterConfirmation}
      />
      <Screen
        name='PurchaseConfirmation'
        component={PurchaseConfirmation}
      />
      <Screen
        name='RecoverPassword'
        component={RecoverPassword}
      />
      <Screen
        name='CreatePassword'
        component={CreatePassword}
      />
      <Screen
        name='PasswordChangeConfirmation'
        component={PasswordChangeConfirmation}
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
        name='CategoryAlteration'
        component={CategoryAlteration}
        options={{
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
          headerTintColor: `${colors.secondary}`,
          headerTitleAlign: 'center',
          title: 'Alterar Categoria',
        }}
      />
      <Screen
        name='Products'
        component={Products}
      />
      <Screen
        name='ProductRegister'
        component={ProductRegister}
      />
      <Screen
        name='ProductAlteration'
        component={ProductAlteration}
      />
      <Screen
        name='Favorite'
        component={Favorite}
      />
      <Screen
        name='Shopping'
        component={Shopping}
      />
    </Navigator>
  )
}