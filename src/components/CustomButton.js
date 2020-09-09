import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  const {title, isDisable, onClick} = props;

  return (
    <TouchableOpacity
      style={[
        styles.conatiner,
        {backgroundColor: isDisable ? '#ececec' : 'orange'},
      ]}
      disabled={isDisable}
      onPress={onClick}>
      <Text style={[styles.text, {color: isDisable ? '#767676' : '#fff'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: 180,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
