import { GestureResponderEvent } from "react-native";

export interface FilterCardProps {
  cardName: string;
  selectedFilterCardName: string | undefined;
  onPressFilterCard: ((event: string) => void);
}

export interface TouchableOpacityExtended {
  marginRight?: string;
}