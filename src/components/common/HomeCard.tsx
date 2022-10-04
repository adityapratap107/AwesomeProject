import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Like from '../../assets/images/common/like.svg';
import Comment from '../../assets/images/common/comment.svg';
import Share from '../../assets/images/common/share.svg';

const HomeCard = ({item}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={styles.cardFooter}>
            <TouchableOpacity>
              <Like height={28} width={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Comment height={28} width={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Share height={28} width={28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  innerContainer: {
    marginTop: heightPercentageToDP(4),
    marginHorizontal: 15,
  },
  cardContainer: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    paddingBottom: 20,
  },
  cardHeaderContainer: {
    padding: 12,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  timeText: {
    color: 'grey',
    marginTop: 4,
  },
  image: {
    height: heightPercentageToDP(30),
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: heightPercentageToDP(2),
  },
});
