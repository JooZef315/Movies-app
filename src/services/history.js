import AsyncStorage from "@react-native-async-storage/async-storage";

export var storeHistory = (Storage) => {
  const jsonSearchHistory = JSON.stringify([...Storage]);
  AsyncStorage.setItem("History", jsonSearchHistory)
    .then((res) => {})
    .catch((e) => {
      console.log("save error", e);
    });
};

export var readHistory = () => {
  return AsyncStorage.getItem("History")
    .then((res) => {
      if (res != null) {
        return JSON.parse(res);
      } else {
        return null;
      }
    })
    .catch((e) => {
      console.log("reading error", e);
    });
};
