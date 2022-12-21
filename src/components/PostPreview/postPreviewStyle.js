import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    marginRight: 2,
    borderRadius: 8,
    height: 100,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 2,
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
});
