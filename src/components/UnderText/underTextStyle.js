import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  under: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  username: {
    textDecorationLine: 'underline',
    fontSize: 16,
    maxWidth: 110,
  },
});
