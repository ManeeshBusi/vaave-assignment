import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: 'lightblue',
    padding: 24,
    marginBottom: 6,
    justifyContent: 'center',
    borderRadius: 8,
  },
  imgContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  img: {
    width: 200,
    height: '100%',
    borderRadius: 100,
  },
  nameContainer: {
    alignItems: 'center',
  },
  fullname: {
    fontSize: 32,
    marginBottom: 6,
    fontWeight: '500',
  },
  username: {
    fontSize: 18,
  },
});
