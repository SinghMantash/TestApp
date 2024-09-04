import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {scaleHeight, scaleWidth} from '../../styles/dimensions';

const Radiobutton = ({title = '', list = [], selectedBtn = ''}) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.rowView}>
        {[...list].map(i => {
          return (
            <TouchableOpacity
              style={[styles.rowView, styles.btnStyle]}
              disabled>
              {selectedBtn == i ? (
                <Image
                  source={imagePath.radioOn}
                  style={styles.radioBtnStyles}
                />
              ) : (
                <Image
                  source={imagePath.radioOff}
                  style={styles.radioBtnStyles}
                />
              )}

              <Text style={{...styles.btnText}}>{i}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Radiobutton;

const styles = StyleSheet.create({
  radioBtnStyles: {
    width: scaleWidth(20),
    height: scaleHeight(20),
  },
  rowView: {
    flexDirection: 'row',
  },
  btnText: {
    marginLeft: 5,
  },
  btnStyle: {
    marginRight: scaleWidth(50),
    marginLeft: 16,
  },
});
