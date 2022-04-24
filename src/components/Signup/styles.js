import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 65,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 7,
    width: "90%",
    height: 44,
    padding: 10,
    marginVertical: 5,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 26,
  },
  welcomeSubText: {
    fontSize: 12,
    paddingHorizontal: 18,
    textAlign: "center",
    paddingVertical: 10,
  },
  errorText: {
    textAlign: "center",
    fontSize: 10,
    color: "red",
    padding: 10,
  },
})

export default styles
