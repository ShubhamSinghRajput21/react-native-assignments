import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'

export default class TestUi extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Product Details</Text>
                    </View>
                    <View style={styles.middleBody}>
                        <View style={styles.firstImage}></View>
                        <Text style={styles.title}>How To Train YourDragon The Hidden World</Text>
                        <Text style={{fontSize:16}}>Part III</Text>
                        <View style={styles.buttonView}>
                            <View style={styles.button}><Text style={styles.buttonText}>Adventure</Text></View>
                            <View style={styles.button1}><Text style={styles.buttonText}>Family</Text></View>
                            <View style={styles.button1}><Text style={styles.buttonText}>Fantasy</Text></View>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#f5f5f5'}}>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                        <View>
                            <Text>Year</Text>
                            <Text>2019</Text>
                        </View>
                        <View style={{marginLeft:30}}>
                            <Text>Country</Text>
                            <Text>USA</Text>
                        </View>
                        <View style={{marginLeft:30}}>
                            <Text>Length</Text>
                            <Text>112 min</Text>
                        </View>
                    </View>
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 0.2,marginTop:10}}/>
                    <Text style={{marginVertical:20, marginLeft:15,fontSize:16}}>About Movie</Text>
                    <Text style={{marginLeft:15}}>When Hiccup discovers Toothless isn't the only Night Fury, he must seek 'The Hidden World', a secret Dragon Utopia before a hired Tyrant Grimmel finds it first</Text>
                    <Text style={{marginVertical:20, marginLeft:15,fontSize:16}}>ScreenShots</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                        <View style={styles.secondImage}>
                        </View>
                        <View style={styles.secondImage}></View>
                    </View>
                    <View style={styles.buttonDiv}>
                        <Text style={{textAlign:'center',marginTop:15,color:'white'}}>Buy Ticket</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles= StyleSheet.create({
header:{
    height:60,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
},
headerText:{
    fontSize:18,
},
middleBody:{
    paddingVertical:20,
    alignItems:'center',
    backgroundColor:'#f5f5f5'
},
firstImage:{
    height:300,
    width:250,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'#94f71b',
},
title:{
    marginVertical:10,
    fontSize:20,
    marginHorizontal:20,
    textAlign:'center'
},
buttonView:{
    flexDirection:'row',
    marginTop:10
},
button:{
    padding:10,
    borderRadius:20,
    backgroundColor:'#427eff'
},
button1:{
    padding:10,
    borderRadius:20,
    marginLeft:10,
    backgroundColor:'#427eff',
},
buttonText:{
    color:'#ffffff',fontSize:16
},
secondImage:{
    height:130,
    width:160,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'#94f71b',
},
buttonDiv:{
    width:340,
    height:50,
    borderRadius:10,
    alignSelf:'center',
    marginVertical:10,
    backgroundColor:'#427eff',
}
});