import React from "react";
import { Pressable, Text } from "native-base";
// Functional Component with props
const Button = (props) => {
    return (
      <Pressable 
      bg= {'#dddddd'}
      p={'15px}'}
      alignItems="center"
      borderRadius={props.onPress}>
        <Text 
        fontSize={'16px'}
        textTransform="uppercase"
        fontWeight="bold">
        {props.text}
        </Text>
      </Pressable>
    );
  };
  
  
  
  export default Button;
  