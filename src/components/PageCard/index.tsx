import { Container } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

function PageCard({
  backgroundColor,
  done,
  activityName,
}: {
  backgroundColor: string;
  done: boolean;
  activityName: string;
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Ionicons name="checkbox" size={32} color={done ? "#1C5EF9" : "#fff"} />
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>{activityName}</Text>
        </View>
      </View>
    </Container>
  );
}

export default PageCard;
