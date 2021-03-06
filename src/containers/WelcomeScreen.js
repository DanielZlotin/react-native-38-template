import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.onClickPushMe = this.onClickPushMe.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.props.name}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="Push me" onPress={this.onClickPushMe} />
      </View>
    );
  }

  onClickPushMe() {
    this.props.navigator.push({
      screen: 'com.example.WelcomeScreen'
    });
  }
}

function mapStateToProps(state) {
  return {
    name: state.myReducer.name
  };
}

export default connect(mapStateToProps)(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
