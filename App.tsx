import React from 'react';
import {
  View as RNView,
  Text as RNText,
  Image as RNImage,
  StatusBar,
} from 'react-native';
import {styled} from 'nativewind';
import Button from './src/components/Button';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <View className="flex justify-center bg-blue-400 items-center h-screen gap-8 flex-1 ">
        <View className="w-60 h-60 overflow-hidden rounded-full border-[10px] border-gray-800">
          <Image
            className="w-full h-full"
            src="https://cdn.britannica.com/99/96099-050-96F791B5/tea-rose-garden-roses-plants-stem-flowers.jpg"
          />
        </View>
        <Text className="text-3xl font-bold text-white bg-gray-800 px-8 py-3 rounded-full">
          Hello Jwel Rana.
        </Text>
        <Text className="text-lg max-w-xs text-center text-gray-700">
          I'm Jwel Rana. I live at Beneali in Jashore. I read in class Honours
          1st Year department of Physics.
        </Text>

        <View>
          <Button title="Download" />
        </View>
      </View>
    </>
  );
}

export default App;
