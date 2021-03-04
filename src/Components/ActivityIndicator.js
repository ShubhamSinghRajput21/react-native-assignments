import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

export default class ActivityIndicatorExample extends Component {
  state = {
    loading: true,
  };
  onPress = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
    }, 5000);
  };
  render() {
    return (
      <>
        <Text>Just click on fetch Image and wait for 5 seconds</Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.btnText}>Fetch Image</Text>
        </TouchableOpacity>
        <View style={styles.imgDiv}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Image style={styles.img} source={require('../assets/react.png')} />
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1eb346',
    width: '60%',
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: '#1eb346',
  },
  imgDiv: {
    width: '80%',
    height: '50%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
  },
  img: {
    width: '80%',
    height: '50%',
    alignSelf: 'center',
  },
});
