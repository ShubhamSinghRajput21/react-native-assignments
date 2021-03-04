import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, StatusBar, TextInput, Button , Alert, TouchableOpacity, ImageBackground} from 'react-native'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class OtpScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            input1:'',
            input2:'',
            input3:'',
            input4:'',
        }
    }

    render() {
        return (
            <>
            <StatusBar backgroundColor='#1eb346'/>
            <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                    <Text style={styles.headerText}>Log into Saavn</Text>
            </View>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.codeTitle}>Enter Your Code</Text>
            <View style={styles.inputView}>
                <TextInput ref={'input1'} 
                onChangeText={(text)=>{this.setState({input1:text});this.refs.input2.focus();}} 
                style={styles.input1} 
                maxLength={1} 
                textAlign='center' 
                autoFocus={true} 
                keyboardType={('numeric')} 
                value={this.state.input1}
                />
                <TextInput ref={'input2'} 
                onChangeText={(text)=>{this.setState({input2:text});this.refs.input3.focus()}} 
                style={styles.input2} 
                maxLength={1} 
                textAlign='center' 
                autoFocus={false} 
                keyboardType={('numeric')} 
                value={this.state.input2}
                />
                <TextInput ref={'input3'} 
                onChangeText={(text)=>{this.setState({input3:text});this.refs.input4.focus()}} 
                style={styles.input2} 
                maxLength={1} 
                textAlign='center' 
                autoFocus={false} 
                keyboardType={('numeric')} 
                value={this.state.input3}
                />
                <TextInput ref={'input4'} 
                onChangeText={(text)=>this.setState({input4:text})} 
                style={styles.input2} 
                maxLength={1} 
                textAlign='center' 
                autoFocus={false} 
                keyboardType={('numeric')} 
                value={this.state.input4}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>Alert.alert(`${this.state.input1}${this.state.input2}${this.state.input3}${this.state.input4}`)}
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
            </ImageBackground>
            </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        flexDirection:'column'
    },
    header:{
        height:50,
        backgroundColor:'#1eb346',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#fff',
        fontSize:18
    },
    codeTitle:{
        fontSize:20,
        textAlign:'center',
        marginTop:30,
        color:'#fff'
    },
    inputView:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center'
    },
    input1:{
        borderWidth:1,
        height:50,
        width:50,
        backgroundColor:'#fff',
        fontSize:20
    },
    input2:{
        borderWidth:1,
        height:50,
        width:50,
        marginLeft:10,
        backgroundColor:'#fff',
        fontSize:20
    },
    button:{
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'#1eb346',
        width:'60%',
        height:60,
        alignSelf:'center',
        marginTop:30
    },
    btnText:{
        fontSize:22,
        textAlign:'center',
        marginTop:10,
        color:'#1eb346'
    },
    image: {
        flex:1,
        resizeMode: "cover",
      },
});
