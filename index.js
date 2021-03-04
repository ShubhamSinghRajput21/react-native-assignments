/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Components/App';
import OtpScreen from './src/Components/OtpScreen';
// import SirKiStyling from './src/Components/SirKiStyling';
import AffanKa from './src/Components/AffanKa';
import HexcodeValidation from './src/Components/HexcodeValidation';
import ActivityIndicatorExample from './src/Components/ActivityIndicator';
import {name as appName} from './app.json';
import TestUi from './src/Components/TestUi';

AppRegistry.registerComponent(appName, () => OtpScreen);
