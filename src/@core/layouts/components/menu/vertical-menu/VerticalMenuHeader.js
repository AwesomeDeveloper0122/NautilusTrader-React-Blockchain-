// ** React Imports
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import logodark from '@src/assets/images/logo/logo_dark.png'
import logolight from '@src/assets/images/logo/logo_light.png'
import logogray from '@src/assets/images/logo/logo_gray.png'
import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'
// ** Third Party Components
import { Disc, X, Circle, Home } from 'react-feather'

// ** Config
import themeConfig from '@configs/themeConfig'

const VerticalMenuHeader = props => {
  const [skin, setSkin] = useSkin()
  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
  
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  return (
    <div className='navbar-header'>
      <ul className='nav navbar-nav flex-row'>
        <li className='nav-item mr-auto'>
          <div className='navbar-brand'>
            <span className='brand-logo'>
              {skin === "dark" && <img src={logodark} alt='logo' />}
              {skin === "light" && <img src={logolight} alt='logo' />}
              {skin === "semi-dark" && <img src={logogray} alt='logo' />}
            </span>
            {skin === "dark" && <h2 className='brand-text mb-0 text-white'>{themeConfig.app.appName}</h2>}
            {skin === "light" && <h2 className='brand-text mb-0 text-black'>{themeConfig.app.appName}</h2>}
            {skin === "semi-dark" && <h2 className='brand-text mb-0 text-gray'>{themeConfig.app.appName}</h2>}
            
          </div>
        </li>
        {/* <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li> */}
      </ul>
    </div>
  )
}

export default VerticalMenuHeader
