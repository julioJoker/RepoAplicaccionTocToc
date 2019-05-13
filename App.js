import React from './node_modules/react';
import { StyleSheet, Text, View ,Image,Button,Linking} from 'react-native';

//import Logo from './Logo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>


      <Text></Text>


      <Button  style={styles.container}

      alignItems='center'
      title="Toc Toc" 
      color='black'
      borderBottomColor='#059DE8' 
      onPress={()=> Linking.openURL ("https://www.toctoc.com/")}
     
     />

     <Image style={{width: 410, height: 600}} source={require('./images/tocToc_2.jpg')} />


      
            
      </View>





     






    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
