import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { useContext } from "react";
import Constants from "expo-constants";
import CVDetail from "../components/CVDetail";
import { CVContext } from "./context";
import { useNavigation } from "@react-navigation/native";

const ShowCVScreen = () => {
  const { details, setDetails } = useContext(CVContext);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          My CV
        </Text>
        <Pressable
          onPress={() => navigation.navigate("UpdateCV")}
          style={styles.button}>
          <Text style={styles.buttonText}>Edit CV</Text>
        </Pressable>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}>
          <View style={{ gap: 15, width: "100%" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "blue",
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginTop: 20,
              }}>
              PERSONAL DETAILS
            </Text>
            <CVDetail title="Full Name:" value={details.name} />
            <CVDetail title="Slack Username:" value={details.username} />
            <CVDetail title="Email:" value={details.email} />
            <CVDetail title="Phone Number:" value={details.phone} />
            <CVDetail title="Bio:" value={details.bio} />

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "blue",
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginTop: 20,
              }}>
              PROFESSIONAL DETAILS
            </Text>
            <CVDetail title="Github URL:" value={details.githubUrl} />
            <CVDetail title="Track:" value={details.track} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ShowCVScreen;

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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
  },
});
