import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:"normal",
        }
    } 
    getCameraPermissions = async() =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status === "granted",
            buttonState:"clicked",
            scanned:false
        })
    }   
    handleBarCodeScanned = async({type,data}) =>{
        this.setState({
          scanned:true,
          scannedData:data,
          buttonState:"normal"  
        })
    }
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState
        
        if(buttonState === "clicked" && hasCameraPermissions){
            return(
              <BarCodeScanner
              onBarCodeScanned = {scanned ? undefned:this.handleBarCodeScanned} 
      
              
              />
            )
                
          }else if(buttonState === "normal"){
              return(
                  <View 
                 style = {{
                     flex:1,
                     justifyContent:"center",
                     alignItems:"center"
                 }} 
                 >
                     <Text>
                         {hasCameraPermissions === true ? this.state.scannedData : "request camera permission"}
                     </Text>
                 <TouchableOpacity style =  {styles.scanButton} onPress = {this.getCameraPermissions} >
                   <Text style ={styles.buttonText}>
                               Scan Qr code
                   </Text>
               </TouchableOpacity>
                  </View> 
               ) 
          } 

            return(
                    <View>
                        
                    </View>
            )      
    }
}

const styles = StyleSheet.create({
    scanButton:{
        backgroundColor:"skyblue",
        padding:10,
        margin:10,
    },
})