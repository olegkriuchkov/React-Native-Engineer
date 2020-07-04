import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Router, Stack, Scene} from 'react-native-router-flux';
import MainPage from './src/components/MainPage';
import PostPage from './src/components/PostPage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="mainpage" initial component={MainPage} title="Main Page" />
          <Scene key="postpage" component={PostPage} title="Post Page" />
        </Stack>
      </Router>
    );
  }
};



export default App;
