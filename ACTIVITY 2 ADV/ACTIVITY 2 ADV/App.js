import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('Age:');
  const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email');
  const [contact, onChangeContact] = React.useState('Contact');

  const [value, onChangeText] = React.useState('About Me');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          
                
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
         
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}   
        />

        <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.container}
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
};  
 

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
        
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 3,
  },
  textInput: {
    padding: 10,
  },
});



  

export default TextInputExample;