import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Basket = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

  useEffect(() => {
    const groupedItems = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name)
      if (existingItem) {
        existingItem.quantity += 1
        existingItem.total += item.price
      } else {
        acc.push({ ...item, quantity: 1, total: item.price })
      }
      return acc
    }, [])
    setGroupedItemsInBasket(groupedItems)
  }, [items])
    
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg text-center font-bold">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>

          <TouchableOpacity 
            onPress={navigation.goBack}
            className="absolute top-1 left-5 bg-gray-100 rounded-full"
          >
            <AntDesign name="leftcircleo" size={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <Image 
          
            source={restaurant.dishes.image}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Basket