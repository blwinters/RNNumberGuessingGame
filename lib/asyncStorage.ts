/*
import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import EventEmitter from 'events'

const changeEmitter = new EventEmitter()

type SetterFn = (value: string | null) => Promise<void>

export const storeValue = async (key: string, value: string | null) => {
  let promise: Promise<void>
  if (value == null) {
    promise = AsyncStorage.removeItem(key)
  } else {
    promise = AsyncStorage.setItem(key, value)
  }

  return promise.then(() => {
    changeEmitter.emit(key, value)
  })
}

export const getValue = async (key: string): Promise<string | null> =>
  AsyncStorage.getItem(key)

export default (
  key: string,
  defaultValue: string | null
): [string | null, SetterFn] => {
  const [value, setValue] = useState(defaultValue)
  useEffect(() => {
    changeEmitter.addListener(key, setValue)

    getValue(key)
      .then(setValue)
      .catch(e => console.error(e))

    return () => {
      changeEmitter.removeListener(key, setValue)
    }
  }, [key, setValue])

  const setter = useCallback(
    (value: string | null) => storeValue(key, value),
    [key]
  )

  return [value, setter]
}
*/