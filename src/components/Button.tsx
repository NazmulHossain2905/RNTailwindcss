import React from 'react';
import {
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import {styled} from 'nativewind';

const Text = styled(RNText);
const TouchableOpacity = styled(RNTouchableOpacity);

type ButtonProps = {
  title: String;
};

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <TouchableOpacity className="bg-slate-800 text-white p-3 px-6 rounded-md">
      <Text className="font-bold text-lg text-white tracking-widest uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

// const Button = (): React.JSX.Element => {
//   return (
//     <TouchableOpacity className="bg-slate-800 text-white p-3 px-6 rounded-md">
//       <Text className="font-bold text-lg text-white tracking-widest uppercase">
//         Download
//       </Text>
//     </TouchableOpacity>
//   );
// };
