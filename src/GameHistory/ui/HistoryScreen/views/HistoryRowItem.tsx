import React from 'react'
import {View, Text} from 'react-native'
import moment from 'moment'
import {GameResult} from '../../../../types'

interface Props {
  gameResult: GameResult
  index: number
}

export default ({gameResult, index}: Props) => {
  return (
    <View style={{flexDirection: 'row', padding: 16}} key={index}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{moment(gameResult.date).format('MM/DD/YY')}</Text>
        <Text>{moment(gameResult.date).format('hh:mm a')}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{gameResult.numGuesses}</Text>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Guesses</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{gameResult.answer}</Text>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Answer</Text>
      </View>
    </View>
  )
}
