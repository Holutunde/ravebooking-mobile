import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { useContext, useState } from "react";
import Constants from "expo-constants";
import { CVContext } from "./context";
import EditDetail from "../components/EditDetail";
import { AntDesign } from "@expo/vector-icons";

const UpdateCVScreen = ({ navigation }) => {
  const { details, setDetails } = useContext(CVContext);
  const [newDetails, setNewDetails] = useState(details);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate("ShowCV");
          }}
          style={{ marginRight: 10 }}>
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Edit CV
        </Text>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <ScrollView>
          <EditDetail
            title="Full Name:"
            value={newDetails.name}
            onChangeText={(val) => setNewDetails({ ...newDetails, name: val })}
          />
          <EditDetail
            title="Slack Username:"
            value={newDetails.username}
            onChangeText={(val) =>
              setNewDetails({ ...newDetails, username: val })
            }
          />
          <EditDetail
            title="Email:"
            value={newDetails.email}
            onChangeText={(val) => setNewDetails({ ...newDetails, email: val })}
          />
          <EditDetail
            title="Phone Number:"
            value={newDetails.phone}
            onChangeText={(val) => setNewDetails({ ...newDetails, phone: val })}
            keyboardType={"phone-pad"}
          />
          <EditDetail
            title="Bio:"
            value={newDetails.bio}
            onChangeText={(val) => setNewDetails({ ...newDetails, bio: val })}
            multiline
          />
          <EditDetail
            title="Github URL:"
            value={newDetails.githubUrl}
            onChangeText={(val) =>
              setNewDetails({ ...newDetails, githubUrl: val })
            }
          />
          <EditDetail
            title="Track:"
            value={newDetails.track}
            onChangeText={(val) => setNewDetails({ ...newDetails, track: val })}
          />

          <Pressable
            style={styles.btn}
            onPress={() => {
              setDetails(newDetails);
              navigation.navigate("ShowCV");
            }}>
            <Text style={styles.btnText}>Save Details</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateCVScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  header: {
    flexDirection: "row",
    paddingTop: Platform.OS == "android" ? Constants.statusBarHeight + 10 : 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#000",
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
