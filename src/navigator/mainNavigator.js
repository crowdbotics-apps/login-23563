import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings188216Navigator from '../features/Settings188216/navigator';
import Settings188201Navigator from '../features/Settings188201/navigator';
import NotificationList188200Navigator from '../features/NotificationList188200/navigator';
import Maps188199Navigator from '../features/Maps188199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings188216: { screen: Settings188216Navigator },
Settings188201: { screen: Settings188201Navigator },
NotificationList188200: { screen: NotificationList188200Navigator },
Maps188199: { screen: Maps188199Navigator },

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
