import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { categories } from '../assets';


const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 0,
        height: 100,
      }}
    >
      {categories.map((category) => (
        <TouchableOpacity style={{position:'relative', marginRight:2, borderRadius: 5, backgroundColor: category.bg }} key={category.title}>
          <Image
              source={category.image}
              resizeMode="contain"
              className="w-20 h-20 rounded"
          />

          <Text 
              className="absolute bottom-0.5 text-white, font-bold h-6 w-20 text-center bg-gray-100 bg-opacity-50" 
          >{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Categories