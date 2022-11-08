import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, TouchableOpacity, Button, TextInput, Image, ScrollView} from 'react-native';

const Stack = createNativeStackNavigator();

export default function MyStack(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animais" component={Animais} />
        <Stack.Screen name="Bateria" component={Bateria} />
        <Stack.Screen name="Natureza" component={Natureza} />
        <Stack.Screen name="Objetos" component={Objetos} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return ( 
    <ScrollView>
        <View >
            <Image style={styles.all} source={require('./img/fundo.png')}/>
        </View>

        <View style={styles.body}>                
            <Image style={styles.title} source={require('./img/title2.png')}/>
            <View>
                <View style={styles.alg}>
                    <Image style={styles.image} source={require('./img/animais/gato.png')}/>
                    <Image style={styles.image} source={require('./img/bateria/bat1.png')}/>
                </View>

                <View style={styles.alg}>
                    <Button style={styles.button} title="Animais" onPress={() =>navigation.navigate('Animais')}/>
                    <Button style={styles.button} title="Bateria" onPress={() =>navigation.navigate('Bateria')}/>
                </View>
            </View>
           
           <View>
                <View style={styles.alg}>
                    <Image style={styles.image} source={require('./img/natureza/floresta.png')}/>
                    <Image style={styles.image} source={require('./img/objetos/sino.png')}/>
                </View>

                <View style={styles.alg}>
                    <Button style={styles.button} title="Natureza" onPress={() =>navigation.navigate('Natureza')}/>
                    <Button style={styles.button} title="Objetos" onPress={() =>navigation.navigate('Objetos')}/>
                </View>
           </View>
        </View>
        
    </ScrollView>
  );
};
  
const Animais = ({ navigation }) => {
    return (
    <View>

    </View>
    );
  };

const Bateria = ({ navigation }) => {
    return(
    <View><Text>This isf profile</Text>
    </View>
    );
};

const Natureza = ({ navigation }) => {
    return(
    <View><Text>This isf profile</Text>
    </View>
    );
};

const Objetos = ({ navigation }) => {
    return(
    <View><Text>This isf profile</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  all:{
    backgroundColor:"",
  },
    body:{
    alignItems:'center',
    padding:40,
    zIndex:1,
    marginTop:-910
  },
  title:{
    height:40,
    width:400,
    padding:40,
    marginTop:-90
  },
  button:{
    justifyContent:'space-around',
    backgroundColor: "#DDDDDD",
    padding: 10,
    height:30,

  },
  image:{
      height:40,
      padding:70
  },
  alg:{
    flexDirection:'row',
    justifyContent:'space-around',
  },

});