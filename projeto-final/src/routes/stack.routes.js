import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../themes/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Screens
import { Login } from '../screens/Login';
import { Logout } from '../screens/Logout';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome/index';
import { Users } from '../screens/Users/index';
import { UserRegister } from '../screens/UserRegister';
import { EditUser } from '../screens/EditUser';
import { Products } from '../screens/Products';
import { ProductRegister } from '../screens/ProductRegister';
import { EditProduct } from '../screens/EditProduct';
import { Categories } from '../screens/Categories';
import { CategoryRegister } from '../screens/CategoryRegister';
import { EditCategory } from '../screens/EditCategory';
import { LogoutModal } from '../screens/LogoutModal';


// Icons
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LogoutButton } from '../components/LogoutButton';

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: `${colors.secondary}`,
          borderTopColor: `${colors.secondary}`,
          paddingTop: 5,
          paddingBottom: 5,
        }
      }}
      tabBarOptions={{
        activeTintColor: `${colors.secondary}`,
        inactiveTintColor: `${colors.primary}`,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="ios-home-outline"
              color={colors.primary}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Users'
        component={Users}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons
              name="person-outline"
              color={colors.primary}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Products'
        component={Products}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather
              name="package"
              color={colors.primary}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Categories'
        component={Categories}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="group"
              color={colors.primary}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='LogoutModal'
        component={LogoutModal}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="logout-variant"
              color={colors.primary}
              size={24}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Welcome'
        component={Welcome}
      />
      <Stack.Screen
        name='Home'
        component={TabRoutes}
      />
      <Stack.Screen
        name='Users'
        component={TabRoutes}
      />
      <Stack.Screen
        name='UserRegister'
        component={UserRegister}
      />
      <Stack.Screen
        name='EditUser'
        component={EditUser}
      />
      <Stack.Screen
        name='Products'
        component={TabRoutes}
      />
      <Stack.Screen
        name='ProductRegister'
        component={ProductRegister}
      />
      <Stack.Screen
        name='EditProduct'
        component={EditProduct}
      />
      <Stack.Screen
        name='Categories'
        component={TabRoutes}
      />
      <Stack.Screen
        name='CategoryRegister'
        component={CategoryRegister}
      />
      <Stack.Screen
        name='EditCategory'
        component={EditCategory}
      />
      <Stack.Screen
        name='LogoutModal'
        component={LogoutModal}
      />
      <Stack.Screen
        name='Logout'
        component={Logout}
      />
    </Stack.Navigator>
  )
}