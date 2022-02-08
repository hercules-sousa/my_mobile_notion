import * as SecureStore from "expo-secure-store";

export async function saveDataInSecureStorage(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result
}