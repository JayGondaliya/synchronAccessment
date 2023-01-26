import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getAPI} from '../../Utils/ServiceManager';
import {style} from './styles';

const Dashboard = ({}) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    movieListAPI();
  }, []);
  const movieListAPI = () => {
    getAPI(onSuccessResponse, onFailureResponse);
    // setListData(response.data.results);
  };

  const onSuccessResponse = response => {
    console.log('response :::: ', response);
    setListData(response.data.results);
  };

  const onFailureResponse = error => {
    console.log('Error :::: ', error);
  };

  return (
    <View style={style.container}>
      <FlatList
        data={listData}
        renderItem={({item, index}) => {
          return (
            <View style={style.renderView}>
              <Text>{item.title}</Text>
              <Image
                source={{
                  uri: 'https://api.themoviedb.org/t/p' + item.poster_path,
                }}
                style={style.imageView}
              />
              <Text>{'Image path :- ' + item?.poster_path}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={style.seprator} />;
        }}
      />
    </View>
  );
};

export default Dashboard;
