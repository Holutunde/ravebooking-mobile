import { TextInput, View, Text } from "react-native"

const EditDetail = ({ title, value, onChangeText, keyboardType = "default", ...otherProps }) => {
  return (
    <View style = {{width: "100%", paddingVertical: 5, marginBottom: 5}}>
      <Text style = {{fontSize: 12, marginBottom: 7, color: "#000",}}>{title}</Text>
      <TextInput
        value = {value}
        onChangeText = {onChangeText}
        style = {{
          borderWidth: 0.5,
          borderColor: "#000",
          padding: 5,
          fontSize: 16,
          fontWeight: "bold"
        }}
        keyboardType = {keyboardType}
        returnKeyType = {"done"}
        {...otherProps}
      />
    </View>
  )
}

export default EditDetail