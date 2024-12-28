import { AppRegistry, Platform } from 'react-native';
import { startNetworkLogging } from 'react-native-network-logger';
import { App } from './App';
import { name as appName } from './app.json';

const _appName = Platform.OS === "ios" ? appName : "balanceui"
startNetworkLogging();

AppRegistry.registerComponent(_appName, () => App);
