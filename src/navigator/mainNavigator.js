import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2188259Navigator from '../features/SignIn2188259/navigator';
import UserProfile188257Navigator from '../features/UserProfile188257/navigator';
import Maps188238Navigator from '../features/Maps188238/navigator';
import Settings188216Navigator from '../features/Settings188216/navigator';
import Settings188201Navigator from '../features/Settings188201/navigator';
import NotificationList188200Navigator from '../features/NotificationList188200/navigator';
import Maps188199Navigator from '../features/Maps188199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2188259: { screen: SignIn2188259Navigator },
UserProfile188257: { screen: UserProfile188257Navigator },
Maps188238: { screen: Maps188238Navigator },
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
