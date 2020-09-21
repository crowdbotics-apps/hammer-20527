import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial105010Navigator from '../features/Tutorial105010/navigator';
import NotificationList104982Navigator from '../features/NotificationList104982/navigator';
import Settings104981Navigator from '../features/Settings104981/navigator';
import Settings104973Navigator from '../features/Settings104973/navigator';
import UserProfile104971Navigator from '../features/UserProfile104971/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial105010: { screen: Tutorial105010Navigator },
NotificationList104982: { screen: NotificationList104982Navigator },
Settings104981: { screen: Settings104981Navigator },
Settings104973: { screen: Settings104973Navigator },
UserProfile104971: { screen: UserProfile104971Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
