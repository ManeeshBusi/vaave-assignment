import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    // marginBottom: 16,
    padding: 6,
    backgroundColor: '#45FFBC',
  },
  subContainer: {
    flex: 1,
  },
  imgContainer: {
    width: 100,
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  searchBox: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    // padding: 2,
  },
  searchInput: {
    width: '82%',
  },
  empty: {
    flex: 1,
  },
});
