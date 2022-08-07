/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Screens/Home';
import createAccount from './src/Screens/CreateAccount';
import Veri_Code from './src/Screens/Verification';
import Category from './src/Screens/Category';
import Cart2 from './src/Screens/Cart2';
import HomeScreenCart from './src/Screens/HomeScreenCart';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreenCart);
