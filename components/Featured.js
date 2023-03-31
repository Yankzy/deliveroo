import { View, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';
import {restaurants} from '../assets';


const FeaturedRow = ({title, description}) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.featuredCategory.includes(title)
    );
    return (
        <View>
            {filteredRestaurants.length > 0 && (
                <>
                    <View className="mt-4 flex-row items-center justify-between px-4">
                        <Text className="font-bold text-lg">{title}</Text>
                        <AntDesign name="arrowright" size={24} color="#00CCBB" />
                    </View>
                    <Text className="text-xs text-gray-500 px-4">{description}</Text>
                </>
            )}
            {/* <Text className="text-xs text-gray-500 px-4">{description}</Text> */}
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
            >
                {/* Restaurants cards */}
                {filteredRestaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.name}
                        image={restaurant.image}
                        name={restaurant.name}
                        description={restaurant.description}
                        rating={restaurant.rating}
                        delivery_time={restaurant.delivery_time}
                        delivery_fee={restaurant.delivery_fee}
                        distance={restaurant.distance}
                        category={restaurant.category}
                        address={restaurant.address}
                        dishes={restaurant.dishes}
                        reviews={restaurant.reviews}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow