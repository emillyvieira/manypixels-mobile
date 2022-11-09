import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
// import Sound from 'react-native-sound';

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
            <Text style={styles.subtitle}>SONS</Text>
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
          <Text style={styles.rodape}>Desenvolvido por ManySounds</Text>
        </View>
        
    </ScrollView>
  );
};

//Sound = new Sound('motorcycle.mp3');
//gato() {
    //playSound = () => {
    //    this.sound.play()
    //}

//}

const Animais = ({ navigation }) => {
    return (
      <ScrollView>
      <View >
          <Image style={stylesAni.back} source={require('./img/animais/fundo5.jpg')}/>
      </View>

      <View style={stylesAni.pagAnimais}>                
          <Image style={styles.title} source={require('./img/title2.png')}/>
          <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/animais/gato.png')}/>
                <Image style={styles.image} source={require('./img/animais/galo.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="Gato" onPress={() =>navigation.navigate('Gato')}/>
                <Button style={styles.button} title="Galo" onPress={() =>navigation.navigate('Galo')}/>
            </View>
          </View>
         
        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/animais/cavalo.png')}/>
                <Image style={styles.image} source={require('./img/animais/boi.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="Cavalo" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="Boi" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>

        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/animais/cachorro.png')}/>
                <Image style={styles.image} source={require('./img/animais/porco.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="Cachorro" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="Porco" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>
        <Text style={styles.rodape}>Desenvolvido por ManySounds</Text>
      </View>
      
  </ScrollView>
    );
  };

const Bateria = ({ navigation }) => {
  return (
    <ScrollView>
      <View >
          <Image style={stylesAni.back} source={require('./img/bateria/fundo8.webp')}/>
      </View>

      <View style={stylesAni.pagAnimais}>                
          <Image style={styles.title} source={require('./img/title2.png')}/>
          <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/bateria/bat1.png')}/>
                <Image style={styles.image} source={require('./img/bateria/bat6.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Gato')}/>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Galo')}/>
            </View>
          </View>
        
        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/bateria/bat7.png')}/>
                <Image style={styles.image} source={require('./img/bateria/bat3.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>

        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/bateria/bat5.png')}/>
                <Image style={styles.image} source={require('./img/bateria/bat8.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="play" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>
        <Text style={styles.rodape}>Desenvolvido por ManySounds</Text>
      </View>
    </ScrollView>
    );
};

const Natureza = ({ navigation }) => {
  return (
    <ScrollView>
      <View >
          <Image style={stylesAni.back} source={require('./img/natureza/fundo3.png')}/>
      </View>

      <View style={stylesAni.pagAnimais}>                
          <Image style={styles.title} source={require('./img/title2.png')}/>
          <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/natureza/floresta.png')}/>
                <Image style={styles.image} source={require('./img/natureza/incendio.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="floresta" onPress={() =>navigation.navigate('Gato')}/>
                <Button style={styles.button} title="fogo" onPress={() =>navigation.navigate('Galo')}/>
            </View>
          </View>
        
        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/natureza/trovao.png')}/>
                <Image style={styles.image} source={require('./img/natureza/ondas.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="trovão" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="ondas" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>

        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/natureza/chuva.png')}/>
                <Image style={styles.image} source={require('./img/natureza/neve.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="chuva" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="nevasca" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>
        <Text style={styles.rodape}>Desenvolvido por ManySounds</Text>
      </View>
    </ScrollView>
    );
};

const Objetos = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
          <Image style={stylesObj.back} source={require('./img/objetos/fundo8.gif')}/>
      </View>

      <View style={stylesObj.pagObjetos}>                
          <Image style={styles.title} source={require('./img/title2.png')}/>
          <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/objetos/bike.png')}/>
                <Image style={styles.image} source={require('./img/objetos/sino.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="bike" onPress={() =>navigation.navigate('Gato')}/>
                <Button style={styles.button} title="sino" onPress={() =>navigation.navigate('Galo')}/>
            </View>
          </View>
        
        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/objetos/camera.png')}/>
                <Image style={styles.image} source={require('./img/objetos/cucco.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="câmera" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="cucco" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>

        <View>
            <View style={styles.alg}>
                <Image style={styles.image} source={require('./img/objetos/buzina.png')}/>
                <Image style={styles.image} source={require('./img/objetos/relogio.png')}/>
            </View>

            <View style={styles.alg}>
                <Button style={styles.button} title="buzina" onPress={() =>navigation.navigate('Natureza')}/>
                <Button style={styles.button} title="relógio" onPress={() =>navigation.navigate('Objetos')}/>
            </View>
        </View>
        <Text style={styles.rodape}>Desenvolvido por ManySounds</Text>
      </View>
    </ScrollView>
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
    marginTop:-1002
  },
  title:{
    height:40,
    width:400,
    padding:40,
    marginTop:-90
  },
  subtitle:{
    color:'white',
    fontSize:20,
    padding:15,
    fontWeight: 'bold',
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
  rodape:{
    color:'white',
    fontSize:20,
    paddingTop:20,
    fontWeight: 'bold',
  },
});

const stylesAni = StyleSheet.create({
  pagAnimais:{
    marginTop:-700,
    alignItems:'center',
    padding:40,
  },
  back:{
    width:1000,
    height:800,
    
  },
});

const stylesObj = StyleSheet.create({
  pagObjetos:{
    marginTop:-710,
    alignItems:'center',
    padding:40,
  },
  back:{
    width:1000,
    height:800,
    
  },
});