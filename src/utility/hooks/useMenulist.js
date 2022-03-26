//** React Imports
import { useEffect } from 'react'

// ** Actions & Store
import { handleComponent, handleSkin,handleMenulist } from '../../redux/actions/layout'
import { useSelector, useDispatch } from 'react-redux'

export const useMenulist = () => {
  const dispatch = useDispatch()
  const menulist = useSelector(state => state.layout.menulist)

  const setMenulist = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(menulist) : value
      // ** Save to store & local storage
      dispatch(handleMenulist(value))
      window.localStorage.setItem('menuoption', JSON.stringify(valueToStore))
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  // useEffect(() => {
  //   // ** Get Body Tag
  //   const element = window.document.body

  //   // ** Define classnames for skins
  //   const classNames = {
  //     dark: 'dark-layout',
  //     bordered: 'bordered-layout',
  //     'semi-dark': 'semi-dark-layout'
  //   }

  //   // ** Remove all classes from Body on mount
  //   element.classList.remove(...element.classList)

  //   // ** If skin is not light add skin class
  //   if (skin !== 'light') {
  //     element.classList.add(classNames[skin])
  //   }
  // }, [skin])

  return [menulist, setMenulist]
}
