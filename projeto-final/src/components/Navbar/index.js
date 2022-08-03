import React from 'react';
import { NavbarContainer } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../../themes/colors';
import { TouchableOpacity } from 'react-native'

export const Navbar = () => {

    function openHome() {

    }

    function openProducts() {

    }

    function openCategories() {

    }

    function openUsers() {

    }

    function logout() {

    }

  return (
    <NavbarContainer>
        <TouchableOpacity onPress={openHome}>
            <Ionicons name="ios-home-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openProducts}>
            <Feather name="package" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCategories}>
            <MaterialCommunityIcons name="group" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openUsers}>
            <Ionicons name="person-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
        <MaterialCommunityIcons name="logout-variant" size={24} color={colors.primary} />
        </TouchableOpacity>
    </NavbarContainer>
  );
}