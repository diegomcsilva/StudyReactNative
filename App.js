import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/pages/Login';

const App = createStackNavigator({
  Login: {screen: Login},
  // Profile: {screen: ProfileScreen},
});

// const App = createAppContainer(MainNavigator);

export default App;
