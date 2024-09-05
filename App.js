import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculateHeartRateLimits = () => {
    const ageNumber = +age;
    if (ageNumber > 0) {
      const lower = (220 - ageNumber) * 0.65;
      const upper = (220 - ageNumber) * 0.85;
      setResult(`Heart rate limits: ${lower.toFixed(2)} - ${upper.toFixed(2)} bpm`);
    } else {
      setResult('Invalid age');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
