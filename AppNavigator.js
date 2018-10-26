import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Quotes from './src/screens/Quotes';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Quotes: { screen: Quotes }
});

export default AppNavigator;
