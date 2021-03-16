import React, {useState} from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import Header from './Components/Header'
import ListItem from './Components/ListItem'

const App = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Repository1",
      description: 'Description 1',
      owner: 'mustermann',
      forks: 'testuser/main-repo',
    },
    {
      id: "2",
      title: "Repository2",
      description: 'Description 2',
      owner: 'max',
      forks: 'testuser/main-repo',
    },
    {
      id: "3",
      title: "Repository3",
      description: 'Description 3',
      owner: 'felix',
      forks: 'testuser/main-repo',
    },
    {
      id: "4",
      title: "Repository4",
      description: 'Description 4',
      owner: 'john',
      forks: 'testuser/main-repo',
    },
    {
      id: "5",
      title: "Repository5",
      description: 'Description 5',
      owner: 'muster',
      forks: 'testuser/main-repo',
    },
    {
      id: "6",
      title: "Repository6",
      description: 'Description 6',
      owner: 'alice',
      forks: 'testuser/main-repo',
    },
    {
      id: "7",
      title: "Repository7",
      description: 'Description 7',
      owner: 'bob',
      forks: 'testuser/main-repo',
    },
    {
      id: "8",
      title: "Repository8",
      description: 'Description 8',
      owner: 'mary',
      forks: 'testuser/main-repo',
    },
  ])

  return (
    <View style={styles.container}>
      <Header title="GitHub Repository Search" />
      <FlatList data={items}
        renderItem={({item}) => (
          <ListItem item={item}/>
        )}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60,
  },
})

export default App
