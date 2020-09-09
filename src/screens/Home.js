import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import SpinnerView from '../components/SpinnerView.js';
import CustomButton from '../components/CustomButton.js';
import {getRandomAsteroidCall} from '../actions/random.asteroid.actions.js';
import {connect} from 'react-redux';

const Home = (props) => {
  const {
    navigation,
    randomAsteroids,
    showSpinner,
    getRandomAsteroidCall,
  } = props;

  const [asteroidIdText, setAsteroidIdText] = useState('');

  useEffect(() => {
    if (randomAsteroids) {
      let near_earth_objects = randomAsteroids.near_earth_objects;
      if (near_earth_objects) {
        let firstObj = near_earth_objects[0];
        moveToDetailsView(firstObj.id);
      }
    }
  }, [randomAsteroids]);

  const moveToDetailsView = (asteroidId) => {
    navigation.navigate('Asteroid Details', {
      asteroidId: asteroidId,
    });
  };

  const onChangeAsteroidText = (text) => {
    setAsteroidIdText(text);
  };

  const randomAsteroidTapped = () => {
    getRandomAsteroidCall();
  };

  const submitTapped = () => {
    moveToDetailsView(asteroidIdText);
  };

  return (
    <View style={styles.conatiner}>
      {showSpinner ? <SpinnerView /> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Asteroid ID"
        value={asteroidIdText}
        onChangeText={(text) => onChangeAsteroidText(text)}
      />
      <CustomButton
        title="Submit"
        isDisable={!asteroidIdText}
        onClick={submitTapped}
      />
      <CustomButton
        title="Random Asteroid"
        isDisable={false}
        onClick={randomAsteroidTapped}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 35,
    borderWidth: 1,
    borderColor: '#767676',
    borderRadius: 8,
    padding: 8,
  },
});

const mapStateToProps = (state) => ({
  randomAsteroids: state.randomAsteroidReducer.randomAsteroids,
  showSpinner: state.randomAsteroidReducer.showSpinner,
  error: state.randomAsteroidReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getRandomAsteroidCall: () => dispatch(getRandomAsteroidCall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
