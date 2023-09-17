import { View, Text, } from "react-native"

const CVDetail = ({ title, value }) => {
  return (
    <View style = {{width: "100%", paddingVertical: 5, borderBottomWidth: 0.5, borderColor: "#000",}}>
      <Text style = {{fontSize: 14, marginBottom: 5, color: "#000",}}>{title}</Text>
      <Text style = {{fontSize: 18, fontWeight: "bold"}}>{value}</Text>
    </View>
  )
}

export default CVDetail