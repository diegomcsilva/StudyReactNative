import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
}

function handlPress() {
    return alert('Clique no botão!');
}

export default function UselessTextInput() {
  const [value, onChangeText] = useState({
      email: 'Email',
      password: 'Password'
  });

  return (
    <View>
        <Text style={styles.title}>PRESIDAFC</Text>
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', paddingLeft: 10, marginBottom: 20 }}
            onChangeText={text => onChangeText(text)}
            value={value.email}
        />
        <TextInput
            style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', paddingLeft: 10, marginBottom: 20 }}
            onChangeText={text => onChangeText(text)}
            value={value.password}
        />
        <TouchableOpacity onPress={this.handlPress} style={styles.button}>
          <Text style={styles.buttonText}>SING IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlPress} style={styles.button}>
          <Text style={styles.buttonText}>SING UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlPress} style={styles.buttonFace}>
          <Text style={styles.buttonText}>SING UP</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40
    },  
    button: {
        backgroundColor: '#329555',
        height: 40,
        marginBottom: 20,
        width: '70%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 38
    },
    buttonFace: {
        backgroundColor: '#331cc3',
        height: 40,
        width: '70%',
    }
})
  
 
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#455356',
    // },
