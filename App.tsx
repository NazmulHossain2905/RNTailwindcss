import React from 'react';
import {View, Text, Button} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        gap: 20,
      }}>
      <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
        Hello World.
      </Text>
      <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
        Hello RNTailwindCSS
      </Text>

      <Button title="Tailwind css" />
    </View>
  );
}

export default App;
