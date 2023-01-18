import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GetProductRequest} from '../../Redux/Action/GetProductAction';
import Searchbar from 'react-native-dynamic-search-bar';

import {LoaderAction} from '../../Redux/Action/LoaderAction';

export default function App() {
  const [Data, setData] = useState(null);

  const [search, setSearch] = useState('');

  const [masterDataSource, setMasterDataSource] = useState([]);

  //----- Reducer -----
  const reducer = useSelector(state => state.GetProduct);
  const loaderResponse = useSelector(state => state.Loader);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reducer.data !== null) {
      setData(reducer.data.slice(0,10));
    } else {
      dispatch(LoaderAction(true));
      dispatch(GetProductRequest());
    }
  }, [reducer.data]);

  const searchHistory = text => {
    let temp = Data;
    console.log('text ::', text);
    if (text) {
      const newData = temp.filter(function (item) {
        console.log('Item ::', item);
        console.log('Item.title ::', item.title);

        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) !== -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      fetch('https://jsonplaceholder.typicode.com/photos?').then(result => {
        let temp = [];
        result.json().then(resp => {
          console.log('resp>>>>', resp);
          resp.map((mapItem, mapIndex) => {
            temp[mapIndex] = {...mapItem, selected: false};
          });

          setData(temp.slice(0, 10));

          console.log('temp ::', temp);
        });
      });
      setSearch(text);
    }
  };

  const onStartPress = (item, index) => {
    let fav = Data;
    console.log('Data ::', fav);
    console.log('item ::', item);
    console.log('item ::', index);

    let saveData = [];
    if (fav[index].selected) {
      fav[index].selected = false;
    } else {
      fav[index].selected = true;
    }

    Data.map((mapItem, mapIndex) => {
      if (mapItem.selected === true) {
        saveData.push(mapItem);
      }
    });

    setData([...fav]);
    AsyncStorage.setItem('favItem', JSON.stringify(saveData));
  };

  const renderItem = ({item, index}) => (
    console.log('item ::', item.title),
    (
      <View style={style.View}>
        <View style={{flex: 1}}>
          <View>
            <Image
              style={style.Image}
              source={require('../image/new-moon.png')}></Image>

            <Text style={{color: 'black', alignSelf: 'center'}}>
              albumId : {item.id}
            </Text>
            <Text style={{color: 'black', marginTop: 10, alignSelf: 'center'}}>
              title : {item.title}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => onStartPress(item, index)}>
          <Image
            source={require('../image/star.png')}
            style={{
              marginBottom: 45,
              height: 40,
              width: 40,
              tintColor: item.selected ? 'red' : 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    )
  );

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={style.MainContainer}>
      <View style={style.header}>
        <Text style={style.text}>Home</Text>

        <Searchbar
          style={style.Searchbar}
          placeholder="Search here"
          onChangeText={text => searchHistory(text)}
        />
      </View>

      <FlatList
        style={style.head}
        data={Data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorView}
      />
    </SafeAreaView>
  );
}

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
    backgroundColor: 'pink',

    height: 90,
  },

  SearchBar: {
    color: 'black',

    marginBottom: 30,
    fontSize: 25,
    alignSelf: 'center',
    borderColor: 'pink',
  },

  head: {
    backgroundColor: 'pink',
    borderColor: '#333',

    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').width / 1,
  },

  text: {
    color: 'black',
    marginTop: 15,
    fontSize: 25,
    alignSelf: 'center',
  },
  Searchbar: {
    fontColor: '#c6c6c6',
    iconColor: '#c6c6c6',
    shadowColor: '#282828',
    cancelIconColor: '#c6c6c6',
    backgroundColor: '#ffffff',
  },

  Image: {
    height: 40,
    width: 40,
  },

  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginHorizontal: 15,
  },
});
