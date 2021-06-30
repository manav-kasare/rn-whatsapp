import AsyncStorage from "@react-native-async-storage/async-storage";

class Cache {
  store = async (key, value) => {
    let finalValue;
    typeof value === "object"
      ? (finalValue = JSON.stringify(value))
      : (finalValue = value);
    await AsyncStorage.setItem(key, finalValue);
  };

  get = async (key, shouldParse) => {
    const value = await AsyncStorage.setItem(key);
    if (shouldParse) return JSON.parse(value);
    return value;
  };
}

export default cache = new Cache();
