import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
        className="bg-white mr-3 shadow"
        onPress={() => navigation.navigate('Restaurant', {
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
        })}
    >
            <Image
                source={image}
                className="h-36 w-64 rounded-sm"
                // className="w-3/4 h-auto aspect-w-1 aspect-h-1 rounded-sm object-cover"
            />
            <View className="px-3 pb-4">
                <Text className="text-lg, font-bold pt-2" >{name}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                {/* <AntDesign name="star" size={24} color="green" opacity={0.5} /> */}
                <EvilIcons name="star" size={24} fill="green"/>
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> . {category}
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Ionicons name="location" size={24} color="#00CCBB" opacity={0.5} />
                <Text className="text-xs text-gray-500">
                    Nearby . ${address}
                </Text>
            </View>
        </TouchableOpacity>
  )
}

export default RestaurantCard