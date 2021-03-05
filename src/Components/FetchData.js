import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';

export default class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchBtn: true,
      data: [],
      activityIndicator: false,
      loaded: false,
    };
  }
  onPress = () => {
    this.setState({fetchBtn: false, activityIndicator: true});
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          this.setState({
            activityIndicator: false,
            data: res.data,
          });
        })
        .catch((err) => console.log(err));
      this.setState({
        loaded: true,
      });
    }, 5000);
  };
  render() {
    const {fetchBtn, loaded, data, activityIndicator} = this.state;
    return (
      <>
        {fetchBtn ? (
          <TouchableOpacity
            style={styles.fetchBtn}
            onPress={() => this.onPress()}>
            <Text style={styles.fetchText}>fetch button</Text>
          </TouchableOpacity>
        ) : null}
        {activityIndicator ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : null}
        {loaded && (
          <ScrollView style={styles.scroll}>
            <View style={styles.contentContainer}>
              {data.map((data) => (
                <View key={data.id} style={styles.content}>
                  <Image style={styles.img} source={{uri: data.avatar}}></Image>
                  <Text style={styles.contentData}>
                    {`Email: ${data.email}`}
                  </Text>
                  <Text style={styles.contentData}>
                    {`Name: ${data.first_name} ${data.last_name}`}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  fetchBtn: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1eb346',
    width: '60%',
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
  },
  fetchText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: '#1eb346',
  },
  scroll: {
    marginVertical: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 50,
  },
  content: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  contentData: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
