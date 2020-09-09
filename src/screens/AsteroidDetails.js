import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SpinnerView from '../components/SpinnerView.js';
import {asteroidDetailsCall} from '../actions/asteroid.details.actions.js';
import {connect} from 'react-redux';

const AsteroidDetails = (props) => {
  const {
    asteroidDetails,
    showSpinner,
    error,
    asteroidDetailsCall,
    route,
  } = props;

  const asteroidId = route.params.asteroidId;

  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    asteroidDetailsCall(asteroidId);
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!asteroidDetails) {
        setErrorMessage('Please check entered asteroid ID');
      }
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      {showSpinner && !errorMessage ? <SpinnerView /> : null}
      {asteroidDetails ? (
        <View>
          <View style={styles.row}>
            <Text style={styles.heading}>Name:</Text>
            <Text style={styles.value}>{asteroidDetails.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Nasa Jpl URL:</Text>
            <Text style={styles.value}>{asteroidDetails.nasa_jpl_url}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>
              Is Potentially Hazardous Asteroid:
            </Text>
            <Text style={styles.value}>
              {asteroidDetails.is_potentially_hazardous_asteroid.toString()}
            </Text>
          </View>
        </View>
      ) : null}
      {error || errorMessage ? (
        <View style={{flexWrap: 'wrap'}}>
          <Text style={styles.heading}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

const mapStateToProps = (state) => ({
  asteroidDetails: state.asteroidDetailsReducer.asteroidDetails,
  showSpinner: state.asteroidDetailsReducer.showSpinner,
  error: state.asteroidDetailsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  asteroidDetailsCall: (body) => dispatch(asteroidDetailsCall(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidDetails);
