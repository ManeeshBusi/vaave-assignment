import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  mainContainer: {
    marginBottom: 16,
  },
  subject: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
