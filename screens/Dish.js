import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithName } from '../features/basketSlice';



const Dish = ({name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithName(state, name))
    const dispatch = useDispatch()
    const addItemToBasket = () => dispatch(addToBasket({ name, description, price, image }))
    const removeItemFromBasket = () => dispatch(removeFromBasket({ name, description, price, image }))
    
  return (
    <>
        <TouchableOpacity 
            onPress={()=>setIsPressed(!isPressed)} 
            className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
        >
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2"> {price} dh</Text>
                </View>
                <View>
                    <Image 
                        style={{borderWidth: 1, borderColor: "#F3F3F4"}}
                        source={image} 
                        className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>
        {isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-3 p-3">
                <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
                    <AntDesign name="minussquare" size={50} color={!items.length ? "gray": "#00CCBB"} />
                </TouchableOpacity>
                <Text className="font-bold">{items.length}</Text>
                <TouchableOpacity onPress={addItemToBasket}>
                    <AntDesign name="plussquare" size={50} color="#00CCBB" />
                </TouchableOpacity>
            </View>
        </View>
        )}
    </>
  )
}

export default Dish