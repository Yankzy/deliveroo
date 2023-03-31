import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dish from './Dish';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';



const Restaurant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {params:{
        image,
        name,
        description,
        rating,
        delivery_time,
        delivery_fee,
        distance,
        category,
        address,
        dishes,
        reviews,
        long,
        lat,
    }} = useRoute()
    useEffect(() => {
        dispatch(setRestaurant({
            image,
            name,
            description,
            rating,
            delivery_time,
            delivery_fee,
            distance,
            category,
            address,
            dishes,
            reviews,
            long,
            lat,
        }))
    }, [])
    
  return (
    <>
    <BasketIcon />
    <ScrollView>
        <View className="relative">
            <Image 
                source={image} 
                className="h-56 w-full bg-gray-300 p-4 bg-cover bg-center"
            />
            <TouchableOpacity 
                onPress={navigation.goBack}
                className="absolute top-14 left-5 bg-gray-100 rounded-full">
                <AntDesign name="leftcircleo" size={50} color="#00CCBB" />
            </TouchableOpacity>
        </View>
        
        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{name}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row space-x-1 items-center">
                        <EvilIcons name="star" size={24} fill="green"/>
                        <Text className="text-gray-500 text-xs"> 
                            <Text className="text-green-500">{rating}</Text> . {" "}{category} 
                        </Text> 
                    </View>
                    <View className="flex-row space-x-1 items-center">
                        <Ionicons name="location" size={24} color="#00CCBB" opacity={0.5} />
                        <Text className="text-gray-500"> {address}</Text> 
                    </View>
                </View>

                <Text className="text-gray-500 mt-2 mb-4">{description}</Text> 
            </View>
        </View>
        <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text> 
            {dishes.map((dish) => (
                <Dish 
                    key={dish.name}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
                    image={dish.image}
                />
            ))}
        </View>
    </ScrollView>
    </>
  )
}

export default Restaurant