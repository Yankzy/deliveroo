import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/Featured';
import { useEffect, useState } from 'react';
import { featureCategories } from '../assets';



const Home = ({ navigation }) =>{
  
    return (
      <ScrollView className="flex-1">
        <SafeAreaView className="bg-white pt-5">
          {/* Header */}
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
              source={require('../assets/images/logo.png')}
              className="w-7 h-7 bg-gray-500 p-4 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
              <Text className="font-bold text-xl">
                Current Location
                <AntDesign name="down" size={15} color="#00CCBB" />
              </Text>
            </View>
            <View className="ml-auto">
              <AntDesign name="user" size={24} color="#00CCBB" />
            </View>

            {/* Search */}
          </View>
          <View className="flex-row space-x-2 items-center pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
              <Octicons name="search" size={24} color="#00CCBB" />
              <TextInput 
                placeholder='Restaurants & cuisines'
                keyboardType='default'
              />
            </View>
            <Ionicons name="filter" size={24} color="#00CCBB" />
          </View>

          {/* Body */}
          {/* Categories */}
          <Categories />
          
          {/* Featured */}
          <View>
            {featureCategories.map((category) => (
              <FeaturedRow
                key={category.title}
                title={category.title}
                description={category.description}
              />
            ))}
          </View>
          {/* <FeaturedRow
            id="1"
            title="Featured"
            description="From Paid Partners"
          />
          <FeaturedRow
            id="2"
            title="Tasty Discounts"
            description="Everyones favorite deals"
          />
          <FeaturedRow
            id="3"
            title="Offers Near You"
            description="Best offers near you"
          /> */}
        </SafeAreaView>
      </ScrollView>
    );
  }

export default Home;