import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import MessageNote from '../../assets/icons/Message_Note'

const TEMP_D = [{id: 1}, {id: 2}, {id: 3}]

const Grid = () => (
  <View style={styles.MainContainer}>
    <FlatList
      data={TEMP_D}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            margin: 1,
            backgroundColor: '#48a9c6',
            alignItems: 'center',
          }}
        >
          <MessageNote width="100" />
        </View>
      )}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
)

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
})

export default Grid
