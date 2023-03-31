import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'



const BasketIcon = () => {
    const items = useSelector((state) => selectBasketItems(state))
    const basketTotal = useSelector((state) => selectBasketTotal(state))
    const navigation = useNavigation();
    if(items.length === 0) return
  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity onPress={()=>navigation.navigate('Basket')} className="mx-5 bg-[#00CCBB] flex-row space-x-1 items-center p-4 rounded-lg" 
            
        >
            <Text className="text-white font-extrabold py-2 px-5 bg-[#01A296] rounded-lg text-2xl">{items.length}</Text>
            <Text className="text-white font-extrabold text-lg flex-1 text-center">View Basket</Text>
            <Text className="text-white font-bold text-lg">{basketTotal} dh</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon