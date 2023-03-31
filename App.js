import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import { Provider } from 'react-redux'
import Basket from './components/Basket';
import store from './features/Store';


const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen 
            name="Basket" 
            component={Basket} 
            options={{presentation: 'modal'}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;