import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 15, margin: 5 }}>Increase Number</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 15, margin: 5 }}>{this.props.counter}</Text>

          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 15, margin: 5 }}>Decrease Number</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch){
return {
  increaseCounter : () => dispatch({ type : 'INCREASE_COUNTER'}),
  decreaseCounter : () => dispatch({ type : 'DECREASE_COUNTER'}), 
}
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
