import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import useStyle from './styles';
import {actionCreators} from '../../../../redux';

const Message = () => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(
    actionCreators,
    dispatch,
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Deposit Money/Withdraw Money</Text>
      <View style={styles.buttonView}>
        <Button
          title="-"
          //   onPress={() => {
          //     dispatch(actionCreators.withdrawMoney(100));
          //   }}
          onPress={() => {
            withdrawMoney(100);
          }}
        />
        <Text>Update Money</Text>
        <Button
          title="+"
          //   onPress={() => {
          //     dispatch(actionCreators.depositMoney(100));
          //   }}
          onPress={() => {
            depositMoney(100);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Message;
