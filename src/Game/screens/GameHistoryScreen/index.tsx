import React, { useState, useEffect } from 'react'

import fetchHistory from './logic/fetchHistory'
import { GameResult } from 'src/Game/types'
import View from './view'

export default () => {
  const [history, setHistory] = useState<GameResult[] | null>(null)
  useEffect(() => {
    fetchHistory().then(hist => setHistory(hist))
  }, [])

  return <View history={history}/> 
}

