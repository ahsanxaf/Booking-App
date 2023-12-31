import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import SearchScreen from "../screens/SearchScreen";
import PlacesScreen from "../screens/PlacesScreen";
import MapScreen from "../screens/MapScreen";
import PropertInfoScreen from "../screens/PropertInfoScreen";
import ShowMore from "../screens/ShowMore";
import RoomsScreen from "../screens/RoomsScreen";
import UserScreen from "../screens/UserScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  function BottomTabs() {
    return(
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Entypo name="home" size={24} color="#003580" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ),
            }}
          />
          <Tab.Screen
            name="Saved"
            component={SavedScreen}
            options={{
              tabBarLabel: "Saved",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <AntDesign name="heart" size={24} color="#003580" />
                ) : (
                  <AntDesign name="hearto" size={24} color="black" />
                ),
            }}
          />
    
          <Tab.Screen
            name="Bookings"
            component={BookingScreen}
            options={{
              tabBarLabel: "Bookings",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="notifications" size={24} color="#003580" />
                ) : (
                  <Ionicons name="notifications-outline" size={24} color="black" />
                ),
            }}
          />
    
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={24} color="#003580" />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                ),
            }}
          />
        </Tab.Navigator>
    )
  }
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Places" component={PlacesScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Info" component={PropertInfoScreen} options={{headerShown:false}}/>
            <Stack.Screen name="More" component={ShowMore} options={{headerShown:false}}/>
            <Stack.Screen name="Rooms" component={RoomsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="User" component={UserScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigator;

const styles = StyleSheet.create({});
