// ** React Imports
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { handleMenuCollapsed, handleContentWidth, handleMenuHidden } from '@store/actions/layout'


// ** Third Party Components
import classnames from 'classnames'
import { ArrowUp, Sun, Moon, Settings, Divide } from 'react-feather'
import ScrollToTop from 'react-scroll-up'
import { Navbar, Button, Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle , ListGroup, ListGroupItem,CustomInput} from 'reactstrap'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Custom Components
import Customizer from '@components/customizer'
import FooterComponent from './components/footer'
import NavbarComponent from './components/navbar'
import SidebarComponent from './components/menu/vertical-menu'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import { useSkin } from '@hooks/useSkin'
import { useMenulist } from '@hooks/useMenulist'
import { useNavbarType } from '@hooks/useNavbarType'
import { useFooterType } from '@hooks/useFooterType'
import { useNavbarColor } from '@hooks/useNavbarColor'

import homeDark from '@src/assets/images/navbar/home_dark.png'
import homeLight from '@src/assets/images/navbar/home_light.png'
import  '@src/assets/scss/style.scss'

// ** Styles
import '@styles/base/core/menu/menu-types/vertical-menu.scss'
import '@styles/base/core/menu/menu-types/vertical-overlay-menu.scss'

const VerticalLayout = props => {
  // ** Props
  const { children, navbar, footer, menu, routerProps, currentActiveItem } = props

  const [active, setActive] = useState(1)

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // ** Hooks
  const [skin, setSkin] = useSkin()
  const [menulist, setMenulist] = useMenulist()
  const [isRtl, setIsRtl] = useRTL()
  const [navbarType, setNavbarType] = useNavbarType()
  const [footerType, setFooterType] = useFooterType()
  const [navbarColor, setNavbarColor] = useNavbarColor()

  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [disstyle,setDisstyle] = useState('none');
  const [themecolor,setThemecolor] = useState('light');

  // ** Store Vars
  const dispatch = useDispatch()
  const layoutStore = useSelector(state => state.layout)

  // ** Update Window Width
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  // ** Vars
  const location = useLocation()
  const contentWidth = layoutStore.contentWidth
  const menuCollapsed = layoutStore.menuCollapsed
  const isHidden = layoutStore.menuHidden
  // console.log("isHidden")
  // console.log(isHidden)

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = val => dispatch(handleMenuCollapsed(val))

  // ** Handles Content Width
  const setContentWidth = val => dispatch(handleContentWidth(val))

  // ** Handles Content Width
  const setIsHidden = val => dispatch(handleMenuHidden(val))

  //** This function will detect the Route Change and will hide the menu on menu item click
  useEffect(() => {
    if (menuVisibility && windowWidth < 1200) {
      setMenuVisibility(false)
    }
  }, [location])

  //** Sets Window Size & Layout Props
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', handleWindowWidth)
    }
  }, [windowWidth])

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // console.log("menulist");
  // console.log(menulist);



  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  }

  const navbarWrapperClasses = {
    floating: 'navbar-floating',
    sticky: 'navbar-sticky',
    static: 'navbar-static',
    hidden: 'navbar-hidden'
  }

  const navbarClasses = {
    floating: 'floating-nav',
    sticky: 'fixed-top',
    static: 'navbar-static-top',
    hidden: 'd-none'
  }
  

  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white'

  if (!isMounted) {
    return null
  }
  const grey = {
    color: "grey",
    
  };
  
  return (
    
    <div
      className={classnames(
        `wrapper vertical-layout ${navbarWrapperClasses[navbarType] || 'navbar-floating'} ${
          footerClasses[footerType] || 'footer-static'
        }`,
        {
          // Modern Menu
          'vertical-menu-modern': windowWidth >= 1200,
          'menu-collapsed': menuCollapsed && windowWidth >= 1200,
          'menu-expanded': !menuCollapsed && windowWidth > 1200,

          // Overlay Menu
          'vertical-overlay-menu': windowWidth < 1200,
          'menu-hide': !menuVisibility && windowWidth < 1200,
          'menu-open': menuVisibility && windowWidth < 1200
        }
      )}
      {...(isHidden ? { 'data-col': '1-column' } : {})}
    >
      {!isHidden ? (
        <SidebarComponent
          skin={skin}
          menu={menu}
          // menuCollapsed={menuCollapsed}
          menuVisibility={menuVisibility}
          setMenuCollapsed={setMenuCollapsed}
          setMenuVisibility={setMenuVisibility}
          routerProps={routerProps}
          currentActiveItem={currentActiveItem}
        />
      ) : null}

    {/* <div className={"card mb-0" `${isHidden==='true'?'pl-5 ml-3':''}`}> */}
    <div className={`card mb-0 ${isHidden === true ? '' : menuCollapsed===true? 'pl-5 ml-3':'ml-18'}`}>
      <Row >
        <Row>
          <div className="pl-2 pr-2 pt-1 pb-1 font-weight-bolder d-flex align-items-center" onClick={() => toggle(1)} style={{borderRight:'1px solid gray', borderBottom:`1px solid ${active === 1 ? "transparent" : "gray"}`}}>
              <span><img className="mr-1" src={skin === "dark" ? homeDark : homeLight} /></span>Portfolio
          </div>
          <div className="pl-2 pr-2 pt-1 pb-1 font-weight-bolder d-flex align-items-center" onClick={() => toggle(2)} style={{borderRight:'1px solid gray', borderBottom:`1px solid ${active === 2 ? "transparent" : "gray"}`}}>
              Name Tab 1
          </div>
          <div className="pl-2 pr-2 pt-1 pb-1 font-weight-bolder d-flex align-items-center" onClick={() => toggle(3)} style={{borderRight:'1px solid gray', borderBottom:`1px solid ${active === 3 ? "transparent" : "gray"}`}}>
              Name Tab 2
          </div>
          <div className="pl-2 pr-2 pt-1 pb-1 font-weight-bolder d-flex align-items-center" onClick={() => toggle(4)} style={{borderRight:'1px solid gray', borderBottom:`1px solid ${active === 4 ? "transparent" : "gray"}`}}>
              Name Tab 3
          </div>
        
        </Row>
        <Col className="pl-2 pr-2 pt-1 pb-1 text-right" style={{borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>
          {/* <ThemeToggler /> */}
          <UncontrolledButtonDropdown>
            <DropdownToggle color='flat-secondary' caret>
              All Account
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
              <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
              <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <Settings onMouseEnter={e => {
                   setDisstyle("block")
                 }}
                style={{position:"relative"}}/>
        </Col>
        
      </Row>
    </div>
    
    {children}

  
    <div
      className={classnames('sidenav-overlay', {
        show: menuVisibility
      })}
      onClick={() => setMenuVisibility(false)}
    ></div>
    

    {themeConfig.layout.customizer === true ? (
      <Customizer
        skin={skin}
        setSkin={setSkin}
        footerType={footerType}
        setFooterType={setFooterType}
        navbarType={navbarType}
        setNavbarType={setNavbarType}
        navbarColor={navbarColor}
        setNavbarColor={setNavbarColor}
        isRtl={isRtl}
        setIsRtl={setIsRtl}
        layout={props.layout}
        setLayout={props.setLayout}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        contentWidth={contentWidth}
        setContentWidth={setContentWidth}
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        transition={props.transition}
        setTransition={props.setTransition}
        themeConfig={themeConfig}
      />
    ) : null}
    <footer
      className={classnames(`footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
        'd-none': footerType === 'hidden'
      })}
    >
      {footer ? (
        footer({ footerType, footerClasses })
      ) : (
        <FooterComponent footerType={footerType} footerClasses={footerClasses} />
      )}
    </footer>
    
   
    <ListGroup style={{display:disstyle,position:'absolute',top:66,right:0}}   onMouseLeave={e => {setDisstyle("none")}}>
      <ListGroupItem style={{borderBottom:"none",marginBottom:0}}>
        <div className='divider' style={{marginBottom:0}}>
          <div className='divider-text mb-1'><h5>Theme Color</h5></div>
        </div>
      
        <Row>
          
          <CustomInput
            inline
            type='radio'
            label='Light'
            value='light'
            id='light'
            name="themecolor"
            defaultChecked={skin === "light" ? true : false}
            // name={props.name}
            // invalid={data !== null && (data.gender === undefined || data.gender === null)}
            onChange={() => setSkin("light")}
          />
           <CustomInput
            inline
            type='radio'
            label='Dark'
            value='dark'
            id='dark'
            name="themecolor"
            defaultChecked={skin === "dark" ? true : false}
            
            // name={props.name}
            // invalid={data !== null && (data.gender === undefined || data.gender === null)}
            onChange={() => setSkin("dark")}
          />
        </Row>
      </ListGroupItem>

      <ListGroupItem style={{borderBottom:"none"}}>
        <div className='divider'>
          <div className='divider-text'><h5>Menu</h5></div>
        </div>
        <div style={{color:"grey"}} className="mb-1 ">menu at-rest</div>
        <Row>
          <CustomInput
            inline
            type='radio'
            label='Hidden'
            value='hidden'
            id='hidden'
            name="menuatlist"
            defaultChecked={menulist==="hidden" || isHidden==true ? true:false}
            onChange={() =>{setIsHidden(true),setMenulist("hidden")}}
          />
           <CustomInput
            inline
            type='radio'
            label='Show only Icon'
            value='showonlyicon'
            id='showonlyicon'
            name="menuatlist"
            defaultChecked={menulist==="showonlyicon" ? true:false}
            onChange={() =>{setIsHidden(false),setMenuCollapsed(true),setMenulist("showonlyicon")}}
          />
           <CustomInput
            inline
            type='radio'
            label='Show Icon and Label'
            value='both'
            id='both'
            name="menuatlist"
            defaultChecked={menulist==="both" ? true:false}
            onChange={() => {setIsHidden(false),setMenuCollapsed(false),setMenulist("both")}}
            />
        </Row>
        <hr />
        <div style={{color:"grey"}} className='mb-1'>on mouse-over</div>
        <Row>
          <CustomInput
            inline
            type='radio'
            label='Mouse Over'
            value='mouseover'
            id='mouseover'
            
          />
        </Row>
        <hr />
        <div style={{color:"grey"}} className='mb-1'>on left-click icon</div>
        <Row>
          <CustomInput
            inline
            type='radio'
            label='Left Click'
            value='leftclick'
            id='leftclick'
          />
        </Row>
          <hr />
        <div style={{color:"grey"}} className='mb-1'>on right-click icon</div>
        <Row>
          <CustomInput
            inline
            type='radio'
            label='Right Click'
            value='rightclick'
            id='rightclick'
          />
          </Row>
          {/* <hr /> */}
      </ListGroupItem>
    </ListGroup>
   
      
      
    
   
    


      {themeConfig.layout.scrollTop === true ? (
        <div className='scroll-to-top'>
          <ScrollToTop showUnder={300} style={{ bottom: '5%' }}>
            <Button className='btn-icon' color='primary'>
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>
      ) : null}
    </div>
  )
}

export default VerticalLayout
