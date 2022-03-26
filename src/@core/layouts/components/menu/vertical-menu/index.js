// ** React Imports
import { Fragment, useState, useRef } from 'react'

// ** Vertical Menu Items Array
import navigation from '@src/navigation/vertical'
import bottomNavigation from '@src/navigation/bottom'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Vertical Menu Components
import VerticalMenuHeader from './VerticalMenuHeader'
import VerticalNavMenuItems from './VerticalNavMenuItems'

const Sidebar = props => {
  // ** Props
  const { menuCollapsed, routerProps, menu, currentActiveItem, skin } = props

  // ** States
  const [groupOpen, setGroupOpen] = useState([])
  const [groupActive, setGroupActive] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false)

  // ** Ref
  const shadowRef = useRef(null)

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if (menuCollapsed) {
      setMenuHover(true)
    }
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block')
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  return (
    <Fragment>
      <div
        className={classnames('main-menu menu-fixed menu-accordion menu-shadow', {
          expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu(props)
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            <VerticalMenuHeader setGroupOpen={setGroupOpen} menuHover={menuHover} {...props} />
            {/* Vertical Menu Header Shadow */}
            <div className='shadow-bottom' ref={shadowRef}></div>
            {/* Perfect Scrollbar */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              <div className="pt-5" style={{display:'flex', justifyContent:'space-between', flexDirection:'column', height:'100%'}}>
                <ul className='navigation navigation-main'>
                  <VerticalNavMenuItems
                    items={navigation}
                    groupActive={groupActive}
                    setGroupActive={setGroupActive}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    groupOpen={groupOpen}
                    setGroupOpen={setGroupOpen}
                    routerProps={routerProps}
                    menuCollapsed={menuCollapsed}
                    menuHover={menuHover}
                    currentActiveItem={currentActiveItem}
                  />
                </ul>
                <ul className='navigation navigation-main'>
                  <VerticalNavMenuItems
                    items={bottomNavigation}
                    groupActive={groupActive}
                    setGroupActive={setGroupActive}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    groupOpen={groupOpen}
                    setGroupOpen={setGroupOpen}
                    routerProps={routerProps}
                    menuCollapsed={menuCollapsed}
                    menuHover={menuHover}
                    currentActiveItem={currentActiveItem}
                  />
                </ul>
              </div>
              
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar
