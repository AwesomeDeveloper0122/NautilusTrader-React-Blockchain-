// ** Handles Layout Content Width (full / boxed)
export const handleContentWidth = value => dispatch => dispatch({ type: 'HANDLE_CONTENT_WIDTH', value })

// ** Handles Menu Collapsed State (Bool)
export const handleMenuCollapsed = value => dispatch => dispatch({ type: 'HANDLE_MENU_COLLAPSED', value })

// ** Handles Menu Hidden State (Bool)
export const handleMenuHidden = value => dispatch => dispatch({ type: 'HANDLE_MENU_HIDDEN', value })

// ** Handles RTL (Bool)
export const handleRTL = value => dispatch => dispatch({ type: 'HANDLE_RTL', value })

// ** Handle Layout Skin
export const handleSkin = value => dispatch => dispatch({ type: 'HANDLE_SKIN', value })

export const handleComponent = value => dispatch => dispatch({ type: 'HANDLE_COMPONENT', value })

export const handleMenulist = value => dispatch => dispatch({ type: 'HANDLE_MENULIST', value })



