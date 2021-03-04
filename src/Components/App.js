import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import ChildComponent from './ChildComponent.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('This is Parent Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`This is Parent getDerivedStateFromProps `);
    console.log(props);
    console.log(state);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`This is Parent shouldComponentUpdate`);
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`This is Parent getSnapshotBeforeUpdate `);
    console.log(prevProps);
    console.log(prevState);
  }
  componentDidMount() {
    console.log(`This is Parent componentDidMount`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`This is Parent componentDidUpdate `);
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log(`This is Parent componentWillUnmount`);
  }
  incrementer = () => {
    console.log('increment');
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log('this is parent app render');
    return (
      <>
        {/* <SafeAreaView style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.hello}>Hello</Text>
            <Text style={styles.signIn}>Sign in to your account</Text>
          </View>
          <View style={styles.mainBody}>
            <View style={styles.inputBox}>
              <TextInput style={styles.input1} value="email"></TextInput>
              <TextInput style={styles.input1} value="password"></TextInput>
            </View>
            <View>
              <Text>SignIn</Text>
            </View>
            <View style={styles.circle}></View>
          </View>
        </SafeAreaView> */}
        <StatusBar barStyle="dark-content" />
        <View style={styles.button}>
          <Button title="Click Me" onPress={this.incrementer} />
          <ChildComponent count={this.state.count} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'white',
    fontSize: 28,
  },
  signIn: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
  mainBody: {
    flex: 3,
  },
  inputBox: {},
  input1: {
    height: 60,
    width: 340,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#dedede',
    backgroundColor: '#dedede',
  },
  circle: {},
  container: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textOne: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
  textTwo: {
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow',
    // color:'white'
  },
  textThree: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
  textFour: {
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow',
    // color:'white'
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
