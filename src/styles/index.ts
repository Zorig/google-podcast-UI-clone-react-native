import {StyleSheet} from 'react-native';

export const colors = {
  primary: 'white',
  background: 'black',
  secondary: 'gray',
};

export const sizes = {
  margin: 14,
};

export const styling = StyleSheet.create({
  alignCenter: {alignItems: 'center'},
  flex: {flex: 1},
  row: {flexDirection: 'row'},
  title: {
    fontSize: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  pressed: {
    opacity: 0.3,
  },
});
