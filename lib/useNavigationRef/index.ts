/*
import { RefObject, useContext, useLayoutEffect, useRef } from 'react'
import {
  NavigationContext,
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
} from 'react-navigation'

export const useNavigationRef = (): RefObject<
  NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
> => {
  const navigation = useContext(NavigationContext)
  const ref = useRef(navigation)

  useLayoutEffect(() => {
    ref.current = navigation
  })

  return ref
}
*/
