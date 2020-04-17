import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import styled from 'styled-components'
import fetchHistory from '../../businessLogic/fetchHistory'
import {GameResult} from '../../../types'
import HistoryRowItem from './views/HistoryRowItem'
import ListItemSeparator from './views/ListItemSeparator'

export default () => {
  const [history, setHistory] = useState<GameResult[] | null>(null)
  useEffect(() => {
    fetchHistory().then(hist => setHistory(hist))
  }, [])

  if (!history) {
    return (
      <Container>
        <Text>You haven't played any games yet.</Text>
      </Container>
    )
  }
  return (
    <FlatList
      data={history}
      ItemSeparatorComponent={ListItemSeparator}
      ListHeaderComponent={ListItemSeparator}
      ListFooterComponent={ListItemSeparator}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => (
        <HistoryRowItem gameResult={item} index={index} />
      )}
    />
  )
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
