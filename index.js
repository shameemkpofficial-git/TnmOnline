/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Screens/Home';
import createAccount from './src/Screens/CreateAccount';
import Veri_Code from './src/Screens/Verification';
import Category from './src/Screens/Category';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
