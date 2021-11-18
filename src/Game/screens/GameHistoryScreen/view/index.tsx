import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components'

import HistoryRowItem from './HistoryRowItem'
import ListItemSeparator from './ListItemSeparator'
import { GameResult } from 'src/Game/types'


interface Props {
  history: GameResult[] | null
}

export default ({ history }: Props) => (
  <>
    { !history && <NoHistory />}
    { history && 
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
    }
  </>
)

const NoHistory = () => (
  <Container>
    <Text>You haven't played any games yet.</Text>
  </Container>
)

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
