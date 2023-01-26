import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import styles from "./form.component.styles";

export default function FormFields({
  icon,
  placeholder,
  marginVertical,
  secure,
  disabled,
  label,
  editable,
  value,
  handleForm,
  name,
  advice,
  width,
}) {
  // const [value, onChangeText] = React.useState("");
  const displayOnly = disabled ? "100%" : "90%";
  const [show, setShow] = useState(secure);

  return (
    <>
      <View>
   
        <View >
          
          <TextInput
            editable={editable}
            style={styles.textInput}
            value={value}
            placeholder={placeholder}
            secureTextEntry={show}
            placeholderTextColor="#000000"
            autoCapitalize="none"
            keyboardType="default"
            onChangeText={text => handleForm(name, text)}
          />
        </View>
    
      </View>
    </>
  );
}
