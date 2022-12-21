import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 60,
    height: 60,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});
