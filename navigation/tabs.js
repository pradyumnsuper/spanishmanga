import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import { icons, COLORS } from "../constants";
import Pdfs from "../screens/Pdfs";
import Search from "../screens/Search";
import Offer from "../screens/Offer";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, ScrollView, BackHandler } from "react-native";
import Premiumoffer from "../Premium/Premiumoffer";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, focused }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#e91e63',
                headerShown: false,
                tabBarStyle: [{display: 'flex'}, {backgroundColor: COLORS.white}],
                tabBarIcon: () => {
                    const tintColor = focused ? COLORS.gray : COLORS.black;

                    switch (route.name) {
                        case "Hometab":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                            case "Premiums":
                                return (
                                    <Image
                                        source={icons.star}
                                        resizeMode="contain"
                                        style={{
                                            
                                            width: 35,
                                            height: 35
                                        }}
                                    />
                                )

                

                        
                    }
                }
            })}
        >
               <Tab.Screen
                name="Premiums"
                component={Premiumoffer}
            />
            <Tab.Screen
                name="Hometab"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Offer}
            />

         

            

            
        </Tab.Navigator>
    )
}

export default Tabs;
