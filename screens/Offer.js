import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message';
import { NavigationRouteContext, useNavigation } from "@react-navigation/native";
import { useTailwind } from 'tailwind-rn/dist';
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import bacg from '../assets/design2.png';
import { useFonts } from 'expo-font';
import Rectangle from '../assets/Rectangle.png'
import like from '../assets/like.png';
import Purchases from 'react-native-purchases';
import Premiumoffer from "../Premium/Premiumoffer";



const Offer = () => {
    
    const navigation = useNavigation();
    const tw = useTailwind();
    let imagea = ''
    const [UserInfo, setUserInfo] = useState(null);
    var z;
    var cc;
    let tt = ''
    var bb
    var aa
    const [location, setLocation] = useState(null);
    const [profiles, setProfiles] = useState([]);



    const [fontsLoaded] = useFonts({
        'SFBold': require('../assets/SF-Pro-Text-Semibold.otf'),
    });

   







    let text = JSON.stringify(profiles.photoURL);
    let age = JSON.stringify(profiles.age);
    console.log(text)
    console.log("hi")

    const likesT = () => {
        Toast.show({
            type: 'success',
            text1: 'Swipe right as many people as you want',
            text2: ' Unlimited likes👋'
        });
    }
    const BeelineT = () => {
        Toast.show({
            type: 'success',
            text1: 'See who already likes you',
            text2: ' Beeline 👧🧍👋'
        });
    }
    const FilterT = () => {
        Toast.show({
            type: 'success',
            text1: ' Apply as many filters as you want',
            text2: ' Advance Filter 🔍'
        });
    }
    const TravelT = () => {
        Toast.show({
            type: 'success',
            text1: 'Change your location to any country or place',
            text2: ' Travel Mode 🗺️'
        });
    }
    const AdsT = () => {
        Toast.show({
            type: 'success',
            text1: 'Premium users see No ads',
            text2: ' No ads 👋'
        });
    }
    const MatchT = () => {
        Toast.show({
            type: 'success',
            text1: 'Get Unlimited Matches all year',
            text2: ' Unlimited Matches 💖'
        });
    }
    const IncogonitoT = () => {
        Toast.show({
            type: 'success',
            text1: 'Only show people who swiped right on',
            text2: ' Icognito Mode 🕵️'
        });
    }
    const SuperSwipeT = () => {
        Toast.show({
            type: 'success',
            text1: 'Get 500 Instant SuperSwipes to get instant approval',
            text2: ' SuperSwipes ✨'
        });
    }

    return (

        <View style={tw("flex-1")}>
            <View>
             <ImageBackground resizeMode="stretch"
                style={styles.img}>

                <Image style={styles.images} source={require("../assets/offer/cover.png")} />
                

                   
            </ImageBackground>
          

                <ImageBackground resizeMode="stretch"
                    style={styles.img}>

                   


                   

                    <View style={tw("items-center ")}>

                        <ImageBackground style={styles.image} source={require("../assets/Rectangle.png")} >


                            <View style={tw("p-1")}></View>

                            <View style={tw("flex-col items-center justify-center  ")}>
                                <TouchableOpacity


                                >
                                    <Text style={styles.buttonTextBold}>Premium</Text>
                                </TouchableOpacity>
                                <Text
                                    style={[
                                        tw("text-center"),

                                        styles.buttonText,
                                    ]}
                                >   
                                Desbloquee todas nuestras funciones para tener el control total de su experiencia</Text>
                                <View style={tw("p-1")}></View>
                                <TouchableOpacity
                                    style={[tw("rounded-2xl w-36 h-14  bg-white"),
                                    styles.shadow]}
                                    onPress={() => navigation.navigate("Premiums")}

                                >
                                    <Text style={tw("text-center text-black text-lg")}>
                                        Obtener {"\n"} ahora 
                                    </Text>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={tw("p-1")}></View>



                        </ImageBackground>
                        <View style={tw("p-5")}></View>
                        <View style={tw("p-5")}></View>
                        <View style={tw("p-5")}></View>
                    </View>

                    
                </ImageBackground>
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setFontSize: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    setBorder:
    {
        width: 200,  // Setting up image width. 
        height: 170,  // Setting up image height.  
        borderWidth: 3,  // Set border width.  
        borderColor: '#F44336',  // Set border Hex Color code here.   
    },
    setBorderRadius:
    {
        width: 170,  // Setting up image width. 
        height: 170,  // Setting up image height.  
        borderWidth: 4,  // Set border width.  
        borderColor: '#EEE5D1',  // Set border Hex Color code here. 
        borderRadius: 99,


        // Set border Radius.   
    },

    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8.65,

        elevation: 8,
    },
    rectangle: {
        height: 128,
        width: 128,
        backgroundColor: 'salmon',

    },
    images: {
        height: 500,
        width: 400,
    },
    buttonText: {
        color: "#000000",
        fontSize: 15,

    },
    buttonTextname: {
        color: "#000000",
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonTextBold: {
        color: "#000000",
        fontSize: 20,
        fontFamily: 'SFBold',
        fontWeight: 'bold'

    },
    img: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
    },
    dashcolor: {
        color: "#808080",
    }


});


export default Offer