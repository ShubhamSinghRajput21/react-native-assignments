import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default class AffanKa extends Component {
  componentDidMount = () => {
    this.refs.nameref.focus();
  };
  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.LoginToSaavn}>
                <Text style={styles.login}>Log in to Saavn</Text>
              </View>

              <View style={styles.code}>
                <Text style={styles.enterCode}>Enter your Code</Text>
              </View>

              <View style={styles.otp}>
                <TextInput
                  ref={'nameref'}
                  style={{
                    backgroundColor: '#f5f4f2',
                    borderWidth: 2,
                    textAlign: 'center',
                    paddingRight:20
                  }}
                />
                <TextInput
                  ref={'nameref'}
                  style={{
                    backgroundColor: '#f5f4f2',
                    borderWidth: 2,
                    textAlign: 'center',
                  }}
                />
                <TextInput
                  ref={'nameref'}
                  style={{
                    backgroundColor: '#f5f4f2',
                    borderWidth: 2,
                    textAlign: 'center',
                  }}
                />
                <TextInput
                  ref={'nameref'}
                  style={{
                    backgroundColor: '#f5f4f2',
                    borderWidth: 2,
                    textAlign: 'center',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: `#32cd32`,
    width: 450,
    paddingLeft: 163,
    paddingTop: 10,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  enterCode: {
    paddingTop: 50,
    fontSize: 20,
  },
  otp: {
    flexDirection: 'row',
  },
});