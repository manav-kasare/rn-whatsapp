import constants from "../../../utils/constants";

const { StyleSheet } = require("react-native");

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 50,
  },
  form: {
    marginTop: constants.height * 0.3,
  },
  input: {
    width: constants.width * 0.8,
    minHeight: constants.height * 0.05,
    marginVertical: 20,
  },
  buttonContent: {
    width: constants.width * 0.8,
    minHeight: constants.height * 0.05,
  },
});
