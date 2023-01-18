 import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';

const Favourite = () => {
  let favData = Data;
  const [Data, setData] = useState([]);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('favItem').then(val => {
        let temp = JSON.parse(val);
        if (temp !== null) {
          console.log('val ::', temp);
          console.log('favItem::>>>', Favourite);
          setData(temp);
        }
      });
    }, []),
  );
  const renderItem = ({item, index}) => (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginTop: 50,
      marginHorizontal: 15,
    }}>
    <View style={{flex: 1}}>
      <View>
        <Image
          style={{
            height: 30,
            width: 30,
          }}
          source={require('../image/new-moon.png')}></Image>

        <Text style={{color: 'black', alignSelf: 'center'}}>
          albumId : {item.id}
        </Text>
        <Text style={{color: 'black', marginTop: 10, alignSelf: 'center'}}>
          title : {item.title}
        </Text>
      </View>
    </View>

   
      <Image
        source={require('../image/star.png')}
        style={{
          marginBottom: 45,
          height: 40,
          width: 40,
          tintColor: item.selected ? 'red' : 'black',
        }}
      />
   
  </View>
  );

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  return (
    <FlatList
      style={style.head}
      data={Data}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorView}
    />
  );
  //
};

export default Favourite;
const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'pink',
    height: 90,
  },
  headers: {
    backgroundColor: 'black',
    // borderColor:'red',
    height: 90,
  },

  item: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },

  itemText: {
    margintop: 60,
    fontSize: 24,
    color: 'black',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },

  SearchBar: {
    color: 'black',
    marginTop: 25,
    fontSize: 25,
    alignSelf: 'center',
    borderColor: 'pink',
  },

  head: {
    backgroundColor: 'pink',

    // borderRadius: 20,

    // width: Dimensions.get('window').width / 1,
    // height: Dimensions.get('window').width / 1,
  },
});
