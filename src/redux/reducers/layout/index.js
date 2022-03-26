// ** ThemeConfig Import
import themeConfig from '@configs/themeConfig'
import { Dashboard } from '../../../../src/view/dashboard/Dashboard'
// ** Returns Initial Menu Collapsed State
const initialMenuCollapsed = () => {
  const item = window.localStorage.getItem('menuCollapsed')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.menu.isCollapsed
}

// ** Returns Initial Layout Skin
const initialLayoutSkin = () => {
  const item = window.localStorage.getItem('skin')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : themeConfig.layout.skin
}
const initialMenuOption = () => {
  const item = window.localStorage.getItem('menuoption')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : "showonlyicon"
}
const initialHiddenOption = () => {
  const item = window.localStorage.getItem('isHidden')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : false
}


// ** Initial State
const initialState = {
  skin: initialLayoutSkin(),
  isRTL: themeConfig.layout.isRTL,
  menuCollapsed: initialMenuCollapsed(),
  // menuHidden: themeConfig.layout.menu.isHidden,
  menuHidden: initialHiddenOption(),
  contentWidth: themeConfig.layout.contentWidth,
  component : "dashboard",
  menulist : initialMenuOption(),
  isHidden : initialHiddenOption(),
  
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CONTENT_WIDTH':
      return { ...state, contentWidth: action.value }
    case 'HANDLE_MENU_COLLAPSED':
      window.localStorage.setItem('menuCollapsed', action.value)
      return { ...state, menuCollapsed: action.value }
    case 'HANDLE_MENU_HIDDEN':
      window.localStorage.setItem('isHidden', action.value)
      return { ...state, menuHidden: action.value }
    case 'HANDLE_RTL':
      return { ...state, isRTL: action.value }
    case 'HANDLE_SKIN':
   
      return { ...state, skin: action.value }
    case 'HANDLE_COMPONENT':
   
      return { ...state, component: action.value }
    case 'HANDLE_MENULIST':
   
      return { ...state, menulist: action.value }
    default:
      return state
  }
}

export default layoutReducer
