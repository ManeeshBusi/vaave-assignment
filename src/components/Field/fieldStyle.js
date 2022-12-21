import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
    marginBottom: 20,
    width: '100%',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
  },
  value: {
    maxWidth: 200,
  },
});
